<?php
/**
 * Created by PhpStorm.
 * User: Feanaro
 * Date: 17.04.2017
 * Time: 21:21
 */
require_once("config/db_config.php");
//require_once("./modules/Paginator.php");
//$link = db_connect();
//$games = games_all($link);
//?>
<!DOCTYPE html>
<html>
<head>
    <title>Admin panel</title>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="/bower_components/bootstrap/dist/css/bootstrap.min.css">
</head>
<body>
<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">Admin Panel</a>
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#">mby Logout</a></li>
                <li><a href="#">Home</a></li>
            </ul>
        </div>
    </div>
</div>
<div class="container-fluid" style="margin-top: 60px">
    <div class="row ">
        <div class="col-sm-3 col-md-2 sidebar" style="margin-bottom: 20px">
            <ul class="nav nav-sidebar">
                <li><a href="./?page=main">Главная</a>
                </li>
                <li><a href="./?page=news">Новости</a>
                </li>
                <li><a href="./?page=albums">Альбомы</a>
                </li>
                <li><a href="./?page=review">Отзывы</a>
                </li>
                <li><a href="./?page=video">Видео</a>
                </li>
            </ul>
           <!-- <?php /*foreach($games as $game): */?>
                <ul class="nav nav-sidebar">
                    <li><a><?/*=$game['game_name']*/?></a>
                        <ul>
                            <?php /*$pages = get_pages($link, $game['alias']);
                            $pages = explode(",", $pages[0]['pages']);
                            */?>
                            <?php /*foreach ($pages as $page): */?>
                                <li><a href="./?page=<?/*=$page*/?>&game=<?/*=$game['alias']*/?>"><?/*=$page*/?></a></li>
                            <?php /*endforeach */?>
                        </ul>
                    </li>
                </ul>
            --><?php /*endforeach */?>

        </div>
        <div class="col-sm-9 col-md-10  main">
            <?php
            if (isset($_GET['page'])) {
                $page = $_GET['page'];
            } else {
                $page = 'main';
            }
            if(isset($page)) {
                include "./services/".$page.".php";
            }else {
                include "./services/main.php";
            }
            ?>
        </div>
    </div>
</div>

<script type="text/javascript" src="/bower_components/jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/admin/scripts/main.js"></script>
</body>
</html>