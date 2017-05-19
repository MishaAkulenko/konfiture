<?php
/**
 * Created by PhpStorm.
 * User: Feanaro
 * Date: 18.04.2017
 * Time: 0:16
 */
if(!function_exists('db_connect')) {
    require_once("../config/db_config.php");
}
$link = db_connect();

if(isset($_GET['action'])){
    $action = $_GET['action'];
    $id = $_GET['id'];

    if($action == 'delete'){

        video_delete($link, $id);
        header("Location: /admin/?page=video");
        die();
    } else if ($action == 'add'){
        if(isset($_POST['name']) && isset($_POST['link'])){

            $file_name = rus2translit($_POST['name']);
            $info = pathinfo($_FILES["preview"]["name"]);

            $id = video_add($link, $_POST['name'], $_POST['link'], $file_name.'.'.$info['extension']);
            video_update($link, $_POST['name'], $_POST['link'], $file_name."-$id.".$info['extension'], $id);
            if(is_uploaded_file($_FILES["preview"]["tmp_name"]))
            {
                copy($_FILES["preview"]["tmp_name"], "../../images/galery/video_preview/".$file_name.'-'.$id.'.'.$info['extension']);
            } else {
                echo("Ошибка загрузки файла");
            }
            header("Location: /admin/?page=video", true);
            die();
        } else{
        include('./views/video_add.php');
        }
    } elseif ($action == 'edit' && $id){

        $data  = get_video($link, $id);


        if(isset($_POST['name']) && isset($_POST['link'])){
            $file_name = rus2translit($_POST['name']);
            if($_FILES['preview']['name'] && $_FILES['preview']['tmp_name'] && $_FILES['preview']['size']) {
                $info = pathinfo($_FILES["preview"]["name"]);
                if (is_uploaded_file($_FILES["preview"]["tmp_name"])) {
                    @unlink('../images/galery/video_preview/' . $data['preview']);
                    copy($_FILES["preview"]["tmp_name"], "../../images/galery/video_preview/" . $file_name . '-' . $id . '.' . $info['extension']);
                    video_update($link, $_POST['name'], $_POST['link'], $file_name . "-$id." . $info['extension'], $id);
                } else {
                    echo("Ошибка загрузки файла");
                }
            } else{
                video_update($link, $_POST['name'], $_POST['link'], $data['preview'], $id);
            }
            
            header("Location: /admin/?page=video", true);
            die();
        }

        include('./views/video_add.php');


    }
} elseif(!isset($_POST['data'])) {
    $items = videos_all($link);
    include('./views/video.php');
}

function videos_all($link){
    $query = "SELECT * FROM `video` WHERE 1";
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
    $items = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $items[] = $row;
    }
    return $items;
}
function video_delete($link, $id){
    $video = get_video($link, $id);
    $query = "DELETE FROM video WHERE id_video=".$id;
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));

    @unlink('../../images/galery/video_preview/'.$video['preview']);
}
function video_add($link, $name, $video_link, $file_name){
    $query = "INSERT INTO video (id_video, user_name, link, preview) VALUES ('', '".$name."', '".$video_link."', '".$file_name."')";
    $result = mysqli_query($link, $query);
    if (!$result){
        die(mysqli_error($link));
    }
    return mysqli_insert_id($link);
}
function video_update($link, $name, $video_link, $file_name, $id_video){
    $query = "UPDATE video SET user_name='".$name."', link='".$video_link."', preview='".$file_name."' WHERE id_video=".$id_video;
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
}
function get_video($link, $id){

    $query = "SELECT * FROM video WHERE id_video = ".$id;
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));


    return mysqli_fetch_assoc($result);

}
?>