<?php
/**
 * Created by PhpStorm.
 * User: Feanaro
 * Date: 04.05.2017
 * Time: 22:12
 */
if(!function_exists('db_connect')) {
    require_once("../config/db_config.php");
}
$link = db_connect();

if(isset($_GET['action'])){
    $action = $_GET['action'];
    $id = $_GET['id'];
    if($action == 'delete'){

        album_delete($link, $id);
        header("Location: /admin/?page=album");
        die();
    } else if ($action == 'delete_photo'){

        photo_delete($link, $_GET['id_photo'], $_GET['id_album']);
        header("Location: /admin/?page=album&action=edit&id=".$_GET['id_album']);
        die();
    } else if ($action == 'add'){
        if(isset($_POST['name'])){

            $album_name = rus2translit($_POST['name']);
            $info = pathinfo($_FILES["preview"]["name"]);

            $id = album_add($link, $_POST['name'], 'preview.'.$info['extension']);

            mkdir("../../images/galery/".$album_name.'_'.$id, 0777);

            album_update($link, $_POST['name'], $album_name.'_'.$id,'preview.'.$info['extension'], $id);


            if(is_uploaded_file($_FILES["preview"]["tmp_name"]))
            {

                copy($_FILES["preview"]["tmp_name"], "../../images/galery/".$album_name.'_'.$id."/preview.".$info['extension']);
            } else {
                echo("Ошибка загрузки файла");
                die();
            }
            header("Location: /admin/?page=album", true);
            die();
        } else{
            include('./views/album_add.php');
        }
    } elseif ($action == 'edit' && $id){

        $data  = get_album($link, $id);
        $photos = get_photo_by_album($link, $id);

        if(isset($_POST['name'])){

            $album_name = rus2translit($_POST['name']);
            if($data['name_translit'] !== $album_name."_".$data['id_album']) {

                @rename("../../images/galery/".$data['name_translit'], "../../images/galery/".$album_name.'_'.$data['id_album']);
            }
            if($_FILES['preview']['name'] && $_FILES['preview']['tmp_name'] && $_FILES['preview']['size']) {

                $info = pathinfo($_FILES["preview"]["name"]);

                if (is_uploaded_file($_FILES["preview"]["tmp_name"])) {
                    @unlink('../../images/galery/' .$album_name.'_'.$data['id_album'].'/'. $data['preview']);
                    copy($_FILES["preview"]["tmp_name"], "../../images/galery/".$album_name.'_'.$id."/preview.".$info['extension']);
                    album_update($link, $_POST['name'], $album_name.'_'.$id,"preview.".$info['extension'], $id);

                } else {
                    echo("Ошибка загрузки файла");
                    die();
                }
            } else{
                album_update($link, $_POST['name'], $album_name.'_'.$id,$data['preview'], $id);
            }

            header("Location: /admin/?page=album", true);
            die();
        }

        include('./views/album_add.php');


    } elseif($action == 'add_photo' && isset($_GET['id_album'])){
        //var_dump($_FILES);die();
        $album = get_album($link, $_GET['id_album']);
        if($_FILES['photo']){
            foreach($_FILES['photo']['tmp_name'] as $key => $tmp_name){

                $name = 'photo-'.uniqid();
                $info = pathinfo($_FILES["photo"]["name"][$key]);

                if(is_uploaded_file($tmp_name)){

                    copy($tmp_name, "../../images/galery/".$album['name_translit']."/".$name.'.'.$info['extension']);
                    photo_add($link, $_GET['id_album'], $name.'.'.$info['extension']);

                } else {
                    echo("Ошибка загрузки файла");
                    die();
                }
            }
        }

        header("Location: /admin/?page=album&action=edit&id=".$_GET['id_album']);
        die();
    }
} elseif(!isset($_POST['data'])) {
    $items = albums_all($link);
    include('./views/album.php');
}

function albums_all($link){
    $query = "SELECT * FROM `album` WHERE 1";
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
    $items = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $items[] = $row;
    }
    return $items;
}
function album_delete($link, $id){
    $album = get_album($link, $id);

    removeDirectory('../../images/galery/'.$album['name_translit']);

    $query = "DELETE FROM album WHERE id_album=".$id;
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));

    //removeDirectory('../images/galery/'.$album['name_translit']);
    //rmdir('../images/galery/'.$album['name_translit']);
}
function photo_delete($link, $id_photo, $id_album){

    $album = get_album($link, $id_album);
    $image = get_photo($link, $id_photo);

    @unlink('../../images/galery/'.$album['name_translit'].'/'.$image['photo_name']);

    $query = "DELETE FROM album_photo WHERE id_photo=".$id_photo;
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));

    //rmdir('../images/galery/'.$album['name_translit']);
}
function album_add($link, $name,$preview){
    $query = "INSERT INTO album (id_album, name, preview) VALUES ('', '".$name."', '".$preview."')";
    $result = mysqli_query($link, $query);
    if (!$result){
        die(mysqli_error($link));
    }
    return mysqli_insert_id($link);
}
function photo_add($link, $id_album,$photo){
    $query = "INSERT INTO album_photo (id_photo, id_album, photo_name) VALUES ('', '".$id_album."', '".$photo."')";
    $result = mysqli_query($link, $query);
    if (!$result){
        die(mysqli_error($link));
    }
    return mysqli_insert_id($link);
}
function album_update($link, $name, $name_translit,$preview, $id_album){
    $query = "UPDATE album SET name='".$name."', name_translit='".$name_translit."', preview='".$preview."' WHERE id_album=".$id_album;
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
}
function get_album($link, $id){

    $query = "SELECT * FROM album WHERE id_album = ".$id;
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));


    return mysqli_fetch_assoc($result);

}
function get_photo($link, $id){

    $query = "SELECT * FROM album_photo WHERE id_photo = ".$id;
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));


    return mysqli_fetch_assoc($result);

}
function get_photo_by_album($link, $id_album){

    $query = "SELECT * FROM album_photo WHERE id_album = ".$id_album;
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
    $items = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $items[] = $row;
    }
    return $items;

}