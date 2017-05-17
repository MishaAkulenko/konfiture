<?php
/**
 * Created by PhpStorm.
 * User: eiiikunkot
 * Date: 17.05.17
 * Time: 12:16
 */
if(!function_exists('db_connect')) {
    require_once("../config/db_config.php");
}
$link = db_connect();

if(isset($_GET['action']) && $_GET['action'] == 'update') {



    if(isset($_POST['organisation_price'])){
        update_config($link, 'organisation_price', $_POST['organisation_price']);
    }

    if(isset($_POST['coordination_price'])){
        update_config($link, 'coordination_price', $_POST['coordination_price']);
    }
    if(isset($_POST['main_email'])){
        update_config($link, 'main_email', $_POST['main_email']);
    }
    if(isset($_POST['organisation_mail'])){
        update_config($link, 'organisation_mail', $_POST['organisation_mail']);
    }
    if(isset($_POST['partner_mail'])){
        update_config($link, 'partner_mail', $_POST['partner_mail']);
    }
    header("Location: /admin/?page=settings", true);
    die();
} else {

    $data = get_all_configuration($link);

    include('./views/settings.php');
}

function get_all_configuration($link){
    $query = "SELECT * FROM `configuration` WHERE 1";
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
    $items = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $items[$row['name']] = $row['value'];
    }
    return $items;
}


function update_config($link, $key, $value){
    $query = 'SELECT * FROM configuration WHERE name = "'.$key.'"';
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));

    $result =  mysqli_fetch_assoc($result);

    if(!empty($result)){
        $query = "UPDATE configuration SET value='".$value."'  WHERE `name` = '".$key."'";

        $result = mysqli_query($link, $query);
        if (!$result){
            die(mysqli_error($link));
        }
    } else {
        $query = "INSERT INTO configuration (id_config, name, value)
VALUES ('', '".$key."', '".$value."')";
        $result = mysqli_query($link, $query);
        if (!$result){
            die(mysqli_error($link));
        }

    }
}