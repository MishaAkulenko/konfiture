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

if(isset($_GET['action']) && $_GET['action'] == 'update'){


    if($_FILES['video']['name'] && $_FILES['video']['tmp_name'] && $_FILES['video']['size']) {

        if (is_uploaded_file($_FILES["video"]["tmp_name"])) {
            @unlink('../../video/video.mp4');
            copy($_FILES["video"]["tmp_name"], "../../video/video.mp4");

        } else {
            echo("Ошибка загрузки файла");
            die();
        }
    }

    if($_FILES['about_us_1']['name'] && $_FILES['about_us_1']['tmp_name'] && $_FILES['about_us_1']['size']) {

        if (is_uploaded_file($_FILES["about_us_1"]["tmp_name"])) {
            @unlink('../../images/about-us-1.jpg');
            copy($_FILES["about_us_1"]["tmp_name"], "../../images/about-us-1.jpg");

        } else {
            echo("Ошибка загрузки файла");
            die();
        }
    }

    if($_FILES['about_us_2']['name'] && $_FILES['about_us_2']['tmp_name'] && $_FILES['about_us_2']['size']) {

        if (is_uploaded_file($_FILES["about_us_2"]["tmp_name"])) {
            @unlink('../../images/about-us-2.jpg');
            copy($_FILES["about_us_2"]["tmp_name"], "../../images/about-us-2.jpg");

        } else {
            echo("Ошибка загрузки файла");
            die();
        }
    }


    if($_FILES['about_us']['name'] && $_FILES['about_us']['tmp_name'] && $_FILES['about_us']['size']) {

        if (is_uploaded_file($_FILES["about_us"]["tmp_name"])) {
            @unlink('../../images/about-us-bg.jpg');
            copy($_FILES["about_us"]["tmp_name"], "../../images/about-us-bg.jpg");

        } else {
            echo("Ошибка загрузки файла");
            die();
        }
    }

    if($_FILES['services']['name'] && $_FILES['services']['tmp_name'] && $_FILES['services']['size']) {

        if (is_uploaded_file($_FILES["services"]["tmp_name"])) {
            @unlink('../../images/services-bg.jpg');
            copy($_FILES["services"]["tmp_name"], "../../images/services-bg.jpg");

        } else {
            echo("Ошибка загрузки файла");
            die();
        }
    }


    if($_FILES['work_bg']['name'] && $_FILES['work_bg']['tmp_name'] && $_FILES['work_bg']['size']) {

        if (is_uploaded_file($_FILES["work_bg"]["tmp_name"])) {
            @unlink('../../images/work-bg.jpg');
            copy($_FILES["work_bg"]["tmp_name"], "../../images/work-bg.jpg");

        } else {
            echo("Ошибка загрузки файла");
            die();
        }
    }


    if($_FILES['portfolio_bg']['name'] && $_FILES['portfolio_bg']['tmp_name'] && $_FILES['portfolio_bg']['size']) {

        if (is_uploaded_file($_FILES["portfolio_bg"]["tmp_name"])) {
            @unlink('../../images/portfolio-bg.jpg');
            copy($_FILES["portfolio_bg"]["tmp_name"], "../../images/portfolio-bg.jpg");

        } else {
            echo("Ошибка загрузки файла");
            die();
        }
    }
    if($_FILES['reviews_bg']['name'] && $_FILES['reviews_bg']['tmp_name'] && $_FILES['reviews_bg']['size']) {

        if (is_uploaded_file($_FILES["reviews_bg"]["tmp_name"])) {
            @unlink('../../images/reviews-bg.jpg');
            copy($_FILES["reviews_bg"]["tmp_name"], "../../images/reviews-bg.jpg");

        } else {
            echo("Ошибка загрузки файла");
            die();
        }
    }
    if($_FILES['questions_bg']['name'] && $_FILES['questions_bg']['tmp_name'] && $_FILES['questions_bg']['size']) {

        if (is_uploaded_file($_FILES["questions_bg"]["tmp_name"])) {
            @unlink('../../images/questions-bg.jpg');
            copy($_FILES["questions_bg"]["tmp_name"], "../../images/questions-bg.jpg");

        } else {
            echo("Ошибка загрузки файла");
            die();
        }
    }

    if($_FILES['letter_bg']['name'] && $_FILES['letter_bg']['tmp_name'] && $_FILES['letter_bg']['size']) {

        if (is_uploaded_file($_FILES["letter_bg"]["tmp_name"])) {
            @unlink('../../images/letter-bg.jpg');
            copy($_FILES["letter_bg"]["tmp_name"], "../../images/letter-bg.jpg");

        } else {
            echo("Ошибка загрузки файла");
            die();
        }
    }

    if($_FILES['footer_bg']['name'] && $_FILES['footer_bg']['tmp_name'] && $_FILES['footer_bg']['size']) {

        if (is_uploaded_file($_FILES["footer_bg"]["tmp_name"])) {
            @unlink('../../images/footer-bg.jpg');
            copy($_FILES["footer_bg"]["tmp_name"], "../../images/footer-bg.jpg");

        } else {
            echo("Ошибка загрузки файла");
            die();
        }
    }
    header("Location: /admin/?page=main", true);
} else {
    include('./views/main.php');
}