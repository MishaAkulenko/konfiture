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

        news_delete($link, $id);
        header("Location: /admin/?page=news");
        die();
    } else if ($action == 'delete_photo'){

        photo_delete($link, $_GET['id_photo'], $_GET['id_news']);
        header("Location: /admin/?page=news&action=edit&id=".$_GET['id_news']);
        die();
    } else if ($action == 'add'){
        if(isset($_POST['title']) && isset($_POST['text'])){

            $link_rewrite = rus2translit($_POST['title']);

            $video_link = ($_POST['video_link'] ? $_POST['video_link'] : '') ;
            $title = $_POST['title'];
            /*texts*/
            $texts['text'] = ($_POST['text'] ? $_POST['text'] : '') ;
            $texts['end_text'] = ($_POST['end_text'] ? $_POST['end_text'] : '') ;
            $texts['second_text'] = ($_POST['second_text'] ? $_POST['second_text'] : '') ;
            $texts['chess_block_text_1'] = ($_POST['chess_block_text_1'] ? $_POST['chess_block_text_1'] : '') ;
            $texts['chess_block_text_2'] = ($_POST['chess_block_text_2'] ? $_POST['chess_block_text_2'] : '') ;

            $type = $_POST['type'];
            $id = news_add($link, $title, $texts, $video_link, $type);

            mkdir("../../images/news/".$link_rewrite.'_'.$id, 0777);
            news_update_link($link, $link_rewrite."_".$id, $id);

            if(is_uploaded_file($_FILES["preview"]["tmp_name"]))
            {
                $inf_preview = pathinfo($_FILES["preview"]["name"]);
                copy($_FILES["preview"]["tmp_name"], "../../images/news/".$link_rewrite."_".$id."/preview.".$inf_preview['extension']);
                news_update_key($link,'preview',"preview.".$inf_preview['extension'], $id);
            } else {
                echo("Ошибка загрузки файла");
            }
            if(is_uploaded_file($_FILES["preview"]["tmp_name"]))
            {
                $inf_preview = pathinfo($_FILES["chess_block_photo_1"]["name"]);
                copy($_FILES["chess_block_photo_1"]["tmp_name"], "../../images/news/".$link_rewrite."_".$id."/chess_block_photo_1.".$inf_preview['extension']);
                news_update_key($link,'chess_block_photo_1',"chess_block_photo_1.".$inf_preview['extension'], $id);
            } else {
                echo("Ошибка загрузки файла");
            }
            if(is_uploaded_file($_FILES["preview"]["tmp_name"]))
            {
                $inf_preview = pathinfo($_FILES["chess_block_photo_2"]["name"]);
                copy($_FILES["chess_block_photo_2"]["tmp_name"], "../../images/news/".$link_rewrite."_".$id."/chess_block_photo_2.".$inf_preview['extension']);
                news_update_key($link,'chess_block_photo_2',"chess_block_photo_2.".$inf_preview['extension'], $id);
            } else {
                echo("Ошибка загрузки файла");
            }
            header("Location: /admin/?page=news", true);
            die();
        } else{
        include('./views/news_add.php');
        }
    } elseif ($action == 'edit' && $id){

        $data  = get_topic($link, $id);
        $photos = get_photo_by_topic($link, $id);

        if(isset($_POST['title']) && isset($_POST['text'])) {

            $video_link = $_POST['video_link'];
            $title = $_POST['title'];
            /*texts*/
            $texts['text'] = $_POST['text'];
            $texts['end_text'] = $_POST['end_text'];
            $texts['second_text'] = $_POST['second_text'];
            $texts['chess_block_text_1'] = $_POST['chess_block_text_1'];
            $texts['chess_block_text_2'] = $_POST['chess_block_text_2'];

            $type = $_POST['type'];

            $news_title = rus2translit($_POST['title']);

            if($data['link_rewrite'] != $news_title."_".$data['id_news']) {

                @rename("../../images/galery/" . $data['name_translit'], "../../images/galery/" . $news_title . '_' . $data['id_news']);
            }
            if ($_FILES['preview'] && is_uploaded_file($_FILES["preview"]["tmp_name"])) {
                $inf_preview = pathinfo($_FILES["preview"]["name"]);
                copy($_FILES["preview"]["tmp_name"], "../../images/news/" . $news_title . "_" . $id . "/preview." . $inf_preview['extension']);
                news_update_key($link, 'preview', "preview." . $inf_preview['extension'], $id);
            } else {
                echo("Ошибка загрузки файла");die();
            }
            if ($_FILES['chess_block_photo_1'] && is_uploaded_file($_FILES["chess_block_photo_1"]["tmp_name"])) {
                $inf_preview = pathinfo($_FILES["chess_block_photo_1"]["name"]);
                copy($_FILES["chess_block_photo_1"]["tmp_name"], "../../images/news/" . $news_title . "_" . $id . "/chess_block_photo_1." . $inf_preview['extension']);
                news_update_key($link, 'chess_block_photo_1', "chess_block_photo_1." . $inf_preview['extension'], $id);
            } else {
                echo("Ошибка загрузки файла");die();
            }
            if ($_FILES['chess_block_photo_2'] && is_uploaded_file($_FILES["chess_block_photo_2"]["tmp_name"])) {
                $inf_preview = pathinfo($_FILES["chess_block_photo_2"]["name"]);
                copy($_FILES["chess_block_photo_2"]["tmp_name"], "../../images/news/" . $news_title . "_" . $id . "/chess_block_photo_2." . $inf_preview['extension']);
                news_update_key($link, 'chess_block_photo_2', "chess_block_photo_2." . $inf_preview['extension'], $id);
            } else {
                echo("Ошибка загрузки файла");die();
            }

            news_update($link, $title, $texts, $video_link, $type);

            header("Location: /admin/?page=news", true);
            die();
        }

        include('./views/news_add.php');


    }elseif($action == 'add_photo' && isset($_GET['id_news'])){
        //var_dump($_FILES);die();
        $album = get_topic($link, $_GET['id_news']);
        if($_FILES['photo']){
            foreach($_FILES['photo']['tmp_name'] as $key => $tmp_name){

                $name = 'photo-'.uniqid();
                $info = pathinfo($_FILES["photo"]["name"][$key]);

                if(is_uploaded_file($tmp_name)){

                    copy($tmp_name, "../../images/news/".$album['link_rewrite']."/".$name.'.'.$info['extension']);
                    photo_add($link, $_GET['id_news'], $name.'.'.$info['extension']);

                } else {
                    echo("Ошибка загрузки файла");
                    die();
                }
            }
        }

        header("Location: /admin/?page=news&action=edit&id=".$_GET['id_news']);
        die();
    }
} elseif(!isset($_POST['data'])) {
    $items = all_news_preview($link);
    include('./views/news.php');
}

function photo_delete($link, $id_photo, $id_news){

    $topic = get_topic($link, $id_news);
    $image = get_photo($link, $id_photo);

    @unlink('../../images/galery/'.$topic['link_rewrite'].'/'.$image['photo']);

    $query = "DELETE FROM news_photo WHERE id_photo=".$id_photo;
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));

    //rmdir('../images/galery/'.$album['name_translit']);
}
function get_photo($link, $id){

    $query = "SELECT * FROM news_photo WHERE id_photo = ".$id;
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));


    return mysqli_fetch_assoc($result);

}
function get_photo_by_topic($link, $id){

    $query = "SELECT * FROM news_photo WHERE id_news = ".$id;
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
    $items = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $items[] = $row;
    }
    return $items;

}
function photo_add($link, $id_album,$photo){
    $query = "INSERT INTO news_photo (id_photo, id_news, photo) VALUES ('', '".$id_album."', '".$photo."')";
    $result = mysqli_query($link, $query);
    if (!$result){
        die(mysqli_error($link));
    }
    return mysqli_insert_id($link);
}
function all_news_preview($link){
    $query = "SELECT id_news, title, text,link_rewrite, preview FROM `news` WHERE 1";
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
    $items = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $items[] = $row;
    }
    return $items;
}
function news_all($link){
    $query = "SELECT * FROM `news` WHERE 1";
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
    $items = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $items[] = $row;
    }
    return $items;
}
function news_delete($link, $id){
    $news = get_topic($link, $id);

    removeDirectory('../../images/news/'.$news['link_rewrite']);

    $query = "DELETE FROM news WHERE id_news=".$id;
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));

}
function news_add($link, $title, $texts, $video_link, $type){
    $query = "INSERT INTO news (id_news, title, video_link, text, end_text, second_text, chess_block_text_1, chess_block_text_2, type)
VALUES ('', '".$title."', '".$video_link."', '".$texts['text']."', '".$texts['end_text']."', '".$texts['second_text']."', '".$texts['chess_block_text_1']."', '".$texts['chess_block_text_2']."', '".$type."')";
    $result = mysqli_query($link, $query);
    if (!$result){
        die(mysqli_error($link));
    }
    return mysqli_insert_id($link);
}
function news_update_link($link, $link_rewrite, $id_news){
    $query = "UPDATE news SET link_rewrite='".$link_rewrite."' WHERE id_news    =".$id_news;
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
}
function news_update_key($link,$key,$data,$id_news){
    $query = "UPDATE news SET ".$key."='".$data."' WHERE id_news =".$id_news;
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
}
function news_update($link, $title, $texts, $video_link, $type){
    $query = "UPDATE news SET title='".$title."', video_link='".$video_link."', text='".$texts['text']."', end_text='".$texts['end_text']."',
     second_text='".$texts['second_text']."', chess_block_text_1='".$texts['chess_block_text_1']."', chess_block_text_2='".$texts['chess_block_text_2']."', type='".$type."'";

    $result = mysqli_query($link, $query);
    if (!$result){
        die(mysqli_error($link));
    }
    return mysqli_insert_id($link);
}
/*function review_update($link, $name, $text, $file_name, $id_review){
    $query = "UPDATE review SET user_name='".$name."', text='".$text."', photo='".$file_name."' WHERE id_review=".$id_review;
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
}*/
function get_topic($link, $id){

    $query = "SELECT * FROM news WHERE id_news = ".$id;
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));


    return mysqli_fetch_assoc($result);

}