<?php
require_once('admin/config/db_config.php');
$link = db_connect();
$news_link = $_GET['link'];
$topic = get_topic_by_link($link,$news_link);

if($topic['type'] == 'news'){
    $type = 'Новости';
} else if($topic['type'] == 'trends'){
    $type = 'Тренды и советы';
}

?>
<!DOCTYPE  html prefix="og: http://ogp.me/ns#">
<head>
    <meta charset="utf-8">
    <title>Свадебное агентство KONFITURE Киев</title>
    <meta name='viewport' content="width=device-width, initial-scale=1.0">
    <meta property="og:title" content="Свадебное агентство KONFITURE Киев"/>
    <meta property="og:type" content="website"/>
    <meta property="og:image" content="/images/og-image.jpg">
    <meta property="og:site_name" content="Свадебное агентство KONFITURE Киев"/>
    <meta property="og:description" content="Свадебное агентство KONFITURE в Киеве - комплексная организация и координация Вашей свадьбы. Креативные идеи и смелые решения. Только качественные услуги"/>
    <meta name="keywords" content="Свадебное агентство, координация свадьбы, координация свадьбы Киев, организация свадьбы, организация свадьбы Киев, свадебное агентство Киев"/>
    <meta name="description" content="Свадебное агентство KONFITURE в Киеве - комплексная организация и координация Вашей свадьбы. Креативные идеи и смелые решения. Только качественные услуги"/>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="touch-icon-ipad.png" type="image/x-icon"/>
    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="bower_components/plyr/dist/plyr.css">
    <link rel="stylesheet" type="text/css" media="all" href="node_modules/jgallery/dist/css/jgallery.min.css" />
    <link rel="stylesheet" href="dist/style.css">
</head>

<body data-news-id="<?=$topic['id_news']?>" class="news-article-page">
    <!--[if lt IE 10]>
    <style type="text/css">
        header,article,footer {
            display: none;
        }
        p {
            margin: 100px 0 0;
            text-align: center;
        }
    </style>
    <p class="chromeframe">Вы используете <strong>устаревший</strong> браузер. Пожалуйста, <a href="http://browsehappy.com/">обновите его</a></p>
    <p>=)</p>
    <![endif]-->
    <header>
        <div class="header-title article-header-title">
            <div class="navigation">
                <div class="news-article-menu">
                    <ul>
                        <li class="article-banner"><img class="article-logo-white" src="images/logo-white.png"><img class="article-logo-color" src="images/logo-color.png"></li>
                        <li><a href="index.html">Главная</a></li>
                        <li><a href="index.html#services">Услуги</a></li>
                        <li><a href="index.html#portfolio">Портфолио</a></li>
                        <li><a href="index.html#reviews">Отзывы</a></li>
                        <li><a href="news.html">Новости</a></li>
                        <li><a href="#contacts">Контакты</a></li>
                        <li class="header-contacts">
                            <div class="text-left social-wrapp">
                                <span class="glyphicon glyphicon-map-marker"></span>
                                <span>г.Киев</span>
                                <a href="https://www.facebook.com/konfiture.com.ua/?ref=bookmarks"><span class="fa g fa-facebook-square"></span></a>
                                <a href="https://vk.com/wd.konfiture"><span class="fa g fa-vk"></span></a>
                                <a href="https://www.instagram.com/konfiture_agency/"><span class="fa g fa-instagram"></span></a>
                            </div>
                            <div class="text-left"><span class="fa fa-phone"></span><span>+38 (063) 028 49 50</span></div>
                        </li>
                    </ul>
                </div>
                <div class="menu-mobile">
                    <div class="banner">
                        <img src="images/logo-white.png">
                    </div>
                    <div class="menu-icon-wrapp">
                        <img class="menu-icon" src="images/icon/menu-icon.png" alt="menu" >
                        <img class="menu-close" src="images/icon/menu-close-icon.png" alt="menu">
                    </div>
                </div>
            </div>
            <div class="back-to-news">
                <a href="news.html">Вернуться к новостям</a>
            </div>
            <div style="background-image: url(<?='images/news/'.$topic['link_rewrite'].'/'.$topic['news_header']?>);" class="header-wrapper"></div>
        </div>
    </header>

    <article class="article-content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12 col-lg-offset-1 col-lg-10">
                    <div class="article-title">
                        <h4><?= $type?></h4>
                        <h1 class="uppercase"><?=$topic['title']?></h1>
                        <div>
                            <img src="images/devider-black.png" alt="2">
                        </div>
                        <p class="text-right news-date text-bold"><?=date('d.m.Y', strtotime($topic['date']))?></p>
                    </div>
                    <p class="text-center"><?=$topic['text']?></p>
                </div>
            </div>
        </div>
        <div class="chess-block">
            <div class="row first-chapter">
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 img-wrapp">
                    <img src="<?='images/news/'.$topic['link_rewrite'].'/'.$topic['chess_block_photo_1']?>" alt="1">
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 content">
                    <p><?=$topic['chess_block_text_1']?>
                    </p>
                </div>
            </div>
            <div class="row second-chapter">
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-sm-push-6 col-md-push-6 col-lg-push-6 img-wrapp">
                    <img class="second-img" src="<?='images/news/'.$topic['link_rewrite'].'/'.$topic['chess_block_photo_2']?>" alt="2">
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-sm-pull-6 col-md-pull-6 col-lg-pull-6 content">
                    <p><?=$topic['chess_block_text_2']?></p>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12 col-lg-offset-1 col-lg-10">
                    <p class="text-center"><?=$topic['second_text']?></p>
                </div>
            </div>
        </div>
        <div class="container-fluid article-galery">
            <div class="row">
                <div class="col-xs-12 col-lg-offset-1 col-lg-10">
                    <div id="article-gallery"></div>
                    <?php if($topic['video_link']):?>
                    <div class="video-wrapp">
                        <div class="article-player" data-type="youtube" data-video-id="<?=$topic['video_link']?>"></div>
                    </div>
                    <? endif?>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12 col-lg-offset-1 col-lg-10">
                    <p class="text-center lover-block"><?=($topic['end_text'] ? $topic['end_text'] : '')?> </p>
                </div>
            </div>
        </div>
    </article>

    <footer>
        <div class="container-fluid contacts" id="contacts">
            <div class="home-arrow">
                <span class="fa fa-arrow-up"></span>
            </div>
            <div class="row">
                <div class="col-xs-12 col-lg-offset-1 col-lg-10">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <img src="images/logo-blue.png" alt="1">
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                            <h3><span class="glyphicon glyphicon-map-marker"></span>Украина, г.Киев</h3>
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                    <h3>По вопросам организации свадьбы</h3>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                    <h3><span class="fa fa-phone"></span><span class="phone-number">+38 (063) 028 49 50</span><span class="comunication"><img class="icons" src="images/icon/viber.png" alt="1">
                                    <img class="icons" src="images/icon/wha.png" alt="2">
                                    <img class="icons" src="images/icon/telegramm.png" alt="3"></span></h3>
                                    <h3 class="parner-mail"><span class="fa fa-envelope-o"></span><a href="mailto:wd.konfiture@gmail.com">wd.konfiture@gmail.com</a></h3>
                                </div>
                            </div>
                            <div class="row org">
                                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                    <h3>По вопросам сотрудничества</h3>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                    <h3><span class="fa fa-phone"></span><span class="phone-number">+38(066) 028 49 40</span><span class="comunication"><img class="icons" src="images/icon/viber.png" alt="1">
                                    <img class="icons" src="images/icon/wha.png" alt="2">
                                    <img class="icons" src="images/icon/telegramm.png" alt="3"></span></h3>
                                    <h3 class="parner-mail"><span class="fa fa-envelope-o"></span><a href="mailto:wd.konfiture@gmail.com">wd.konfiture@gmail.com</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row wrapp-log">
                        <div class="col-xs-12 col-sm-6 col-md-8 col-lg-8">
                            <h3>© 2016 by Konfiture Wedding Agency</h3>
                        </div>
                        <div class="col-lg-4">
                            <h3 class="social">
                            <a href="https://www.youtube.com/channel/UCqpHmHvJMQB76p2e9kfExgw"><span class="fa fa-youtube-square"></span></a>
                            <a href="https://vk.com/wd.konfiture"><span class="fa fa-vk"></span></a>
                            <a href="https://www.facebook.com/konfiture.com.ua/?ref=bookmarks"><span class="fa fa-facebook-square"></span></a>
                            <a href="https://www.instagram.com/konfiture_agency/"><span class="fa fa-instagram"></span></a></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <script src="bower_components/jquery/dist/jquery.min.js"></script>
    <script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="bower_components/jquery-touch-events/src/jquery.mobile-events.min.js"></script>
    <script type="text/javascript" src="bower_components/jquery-template/jquery-loadTemplate/jquery.loadTemplate-1.4.4.min.js"></script>
    <script type="text/javascript" src="node_modules\jgallery\dist\js\jgallery.min.js"></script>
    <script type="text/javascript" src="node_modules\jgallery\dist\js\tinycolor-0.9.16.min.js"></script>
    <script type="text/javascript" src="node_modules\jgallery\dist\js\touchswipe.min.js"></script>
    <script src="bower_components/plyr/dist/plyr.js"></script>
    <script src="bower_components/jquery.maskedinput.min.js"></script>
    <script type="text/javascript" src="dist/script.js"></script>
</body>

</html>
