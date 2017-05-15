<?php
/**
 * Created by PhpStorm.
 * User: Feanaro
 * Date: 15.05.2017
 * Time: 23:06
 */

if(!function_exists('db_connect')) {
    require_once("../config/db_config.php");
}
$link = db_connect();

include('./views/main.php');