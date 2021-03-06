<?php
/**
 * Created by PhpStorm.
 * User: eiiikunkot
 * Date: 27.04.17
 * Time: 11:11
 */
require_once('admin/config/db_config.php');
require_once('admin/lib/PHPMailerAutoload.php');
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
    $query = "SELECT id_news, title, preview, text, link_rewrite, type FROM `news` WHERE 1 ORDER BY `date` DESC";
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
    $items = array();
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {

        if($row['type'] == 'news'){
            $type = 'Новости';
        } else if($row['type'] == 'trends'){
            $type = 'Тренды и советы';
        }
        $items[$i]['title'] = $row['title'];
        $items[$i]['poster'] = 'images/news/'.$row['link_rewrite']."/".$row['preview'];
        $items[$i]['link'] = ''.$row['link_rewrite'];
        $items[$i]['chapter'] = $type;
        $i ++;
    }
    header('Content-Type: application/json');
    echo json_encode($items);

}elseif($action == 'get_photo_news'){

    $id = $_GET['id_news'];
    $query = "SELECT * FROM news WHERE id_news = ".$id;
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
    $topic =  mysqli_fetch_assoc($result);

    $query = "SELECT * FROM news_photo WHERE id_news = ".$id;
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
    $items = array();

    while ($row = mysqli_fetch_assoc($result)) {
        $items[] = 'images/news/'.$topic['link_rewrite']."/".$row['photo'];

    };

    header('Content-Type: application/json');
    echo json_encode($items);

} else if ($action == 'organization_form'){
    $mail_to = get_config($link,'main_email');
    $data = $_POST['text'];
    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->CharSet  = 'utf-8';
    $mail->SMTPAuth = true;
    $mail->Username = 'info.konfiture@gmail.com';
    $mail->Password = 'adgjl123456';
    $mail->Host = 'smtp.gmail.com';;
    $mail->SMTPSecure = 'ssl';
    $mail->Port = '465';

    $mail->setLanguage('en');
    $mail->From     = 'info.konfiture@gmail.com';
    $mail->FromName = 'Konfiture notification';

    /* кому */
    $mail->AddAddress($mail_to['value'], 'admin');
    $mail->IsHTML(true);

    /* тема */
    $mail->Subject  = 'organization form message';
    $mail->Body     = $data;


    if(!$mail->send()) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Message has been sent';
    }

} else if ($action == 'contact_form'){
    $mail_to = get_config($link,'main_email');

    $data = $_POST['text'];
    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->SMTPDebug = 1;
    $mail->SMTPAuth = true;
    $mail->CharSet  = 'utf-8';
    /*$mail->Username = 'wedding@konfiture.com.ua';
    $mail->Password = 'TrdSUqaeBy6S';
    $mail->Host = 'mx1.mirohost.net';*/
    $mail->SMTPSecure = 'ssl';
    $mail->Port = '465';
    $mail->Username = 'info.konfiture@gmail.com';
    $mail->Password = 'adgjl123456';
    $mail->Host = 'smtp.gmail.com';

    $mail->setLanguage('en');

    $mail->From     = 'info.konfiture@gmail.com';
    $mail->FromName = 'Konfiture notification';

    $mail->AddAddress($mail_to['value'], 'admin');
    
    $mail->IsHTML(true);
    $mail->Subject  = 'contact form message';
    $mail->Body     = $data;


    if(!$mail->send()) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Message has been sent';
    }

} else if ($action == 'get_config'){

    $key = $_GET['key'];

    $config = get_config($link, $key);

    echo $config['value'];

}

