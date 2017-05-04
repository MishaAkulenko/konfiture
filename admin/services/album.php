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
    } else if ($action == 'add'){
        if(isset($_POST['name']) && isset($_POST['text'])){

            $file_name = rus2translit($_POST['name']);
            $info = pathinfo($_FILES["photo"]["name"]);

            $id = review_add($link, $_POST['name'], $_POST['text'], $file_name.'.'.$info['extension']);
            review_update($link, $_POST['name'], $_POST['text'], $file_name."-$id.".$info['extension'], $id);
            if(is_uploaded_file($_FILES["photo"]["tmp_name"]))
            {
                copy($_FILES["photo"]["tmp_name"], "../../images/review/".$file_name.'-'.$id.'.'.$info['extension']);
            } else {
                echo("Ошибка загрузки файла");
            }
            header("Location: /admin/?page=review", true);
            die();
        } else{
            include('./views/review_add.php');
        }
    } elseif ($action == 'edit' && $id){

        $data  = get_album($link, $id);


        if(isset($_POST['name'])){
            $alb_name = rus2translit($_POST['name']);
            if($_FILES['preview']['name'] && $_FILES['preview']['tmp_name'] && $_FILES['preview']['size']) {
                $info = pathinfo($_FILES["preview"]["name"]);
                if (is_uploaded_file($_FILES["photo"]["tmp_name"])) {
                    @unlink('../images/gal/' . $data['photo']);
                    copy($_FILES["photo"]["tmp_name"], "../../galery/" . $alb_name);
                    review_update($link, $_POST['name'], $_POST['text'], $file_name . "-$id." . $info['extension'], $id);
                } else {
                    echo("Ошибка загрузки файла");
                }
            } else{
                review_update($link, $_POST['name'], $_POST['text'], $data['photo'], $id);
            }



            header("Location: /admin/?page=album", true);
            die();
        }

        include('./views/album_add.php');


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
    $review = get_review($link, $id);
    $query = "DELETE FROM album WHERE id_album=".$id;
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));

    @unlink('../images/review/'.$review['photo']);
}
function album_add($link, $name,$name_translit){
    $query = "INSERT INTO album (id_album, name, name_translit) VALUES ('', '".$name."', '".$name_translit."')";
    $result = mysqli_query($link, $query);
    if (!$result){
        die(mysqli_error($link));
    }
    return mysqli_insert_id($link);
}
function album_update($link, $name, $name_translit, $id_album){
    $query = "UPDATE album SET name='".$name."', name_translit='".$name_translit."' WHERE id_album=".$id_album;
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