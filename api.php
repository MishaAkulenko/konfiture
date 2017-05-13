<?php
/**
 * Created by PhpStorm.
 * User: eiiikunkot
 * Date: 27.04.17
 * Time: 11:11
 */
require_once('admin/config/db_config.php');
ini_set('display_errors',1);
error_reporting(E_ALL);
$link = db_connect();
$action  = $_GET['action'];
if($action == 'get_reviews' ) {

    $query = "SELECT * FROM `review` WHERE 1";
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));

    $items = array();
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {

        $items[$i]['content'] = $row['text'];
        $items[$i]['title'] = $row['user_name'];
        $items[$i]['portrait'] = 'images/review/'.$row['photo'];
        $i ++;
    }
    header('Content-Type: application/json');
    echo json_encode($items);
} elseif ($action == "get_video"){
    $query = "SELECT * FROM `video` WHERE 1";
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
    $items = array();

    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {

        $items[$i]['partners'] = $row['user_name'];
        $items[$i]['poster'] = 'images/galery/video_preview/'.$row['preview'];
        $items[$i]['link'] = $row['link'];
        $i ++;
    }
    header('Content-Type: application/json');
    echo json_encode($items);

}elseif ($action == "get_album"){
    $query = "SELECT * FROM `album` WHERE 1";
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
    $items = array();
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {

        $items[$i]['partners'] = $row['name'];
        $items[$i]['poster'] = 'images/galery/'.$row['name_translit']."/".$row['preview'];
        $items[$i]['galeryId'] = $row['id_album'];
        $i ++;
    }
    header('Content-Type: application/json');
    echo json_encode($items);

} elseif($action == 'get_photo'){

    $album_id = $_GET['id_album'];
    $query = "SELECT * FROM album WHERE id_album = ".$album_id;
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
    $album =  mysqli_fetch_assoc($result);

    $query = "SELECT * FROM album_photo WHERE id_album = ".$album_id;
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
    $items = array();

    while ($row = mysqli_fetch_assoc($result)) {
        $items[] = 'images/galery/'.$album['name_translit']."/".$row['photo_name'];

    };

    header('Content-Type: application/json');
    echo json_encode($items);

} elseif ($action == "get_news_preview"){
    $query = "SELECT id_news, title, preview, text, link_rewrite FROM `news` WHERE 1 ORDER BY `date` DESC";
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
    $items = array();
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {

        $items[$i]['title'] = $row['title'];
        $items[$i]['poster'] = 'images/news/'.$row['link_rewrite']."/".$row['preview'];
        $items[$i]['content'] = mb_strimwidth($row['text'],0, 175);
        $items[$i]['link'] = ''.$row['link_rewrite'];
        $i ++;
    }
    header('Content-Type: application/json');
    echo json_encode($items);

} elseif ($action == "get_news_html_preview"){
    $query = "SELECT id_news, title, preview, text, link_rewrite FROM `news` WHERE 1 ORDER BY `date` DESC";
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
    $items = array();
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {

        $items[$i]['title'] = $row['title'];
        $items[$i]['poster'] = 'images/news/'.$row['link_rewrite']."/".$row['preview'];
        $items[$i]['link'] = ''.$row['link_rewrite'];
        $i ++;
    }
    header('Content-Type: application/json');
    echo json_encode($items);

}
