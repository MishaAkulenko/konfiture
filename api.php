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
        $items[$i]['portrait'] = 'images/rewiew/'.$row['photo'];
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

        $items[$i]['partners'] = $row['link'];
        $items[$i]['poster'] = $row['preview'];
        $items[$i]['link'] = 'images/galery/video_preview'.$row['preview'];
        $i ++;
    }
    header('Content-Type: application/json');
    echo json_encode($items);



}
