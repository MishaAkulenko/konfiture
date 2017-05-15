<?php
/**
 * Created by PhpStorm.
 * User: Feanaro
 * Date: 15.05.2017
 * Time: 23:06
 */
?>
<h2>Редактирование элементов главной страницы</h2>

<form style="    margin-bottom: 30px;" class="col-md-12" method="post" action="./services/main.php?action=update" enctype="multipart/form-data">

    <video width="400" controls>
        <source src="../video/video.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
    </video>
    <div class="form-group">
        <label for="exampleInputFile">фон блока</label>
        <input type="file" accept="video/mp4" name="video" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
    </div>

    <h3>Блок О НАС (фото команды)</h3>
    <div>
        <div style="width: 45%;float: right">
    <div class="form-group">
        <img style="width: 80%;" src="../images/about-us-1.jpg">
    </div>
    <div class="form-group">
        <label for="exampleInputFile">фото 1</label>
        <input type="file" accept="image/vnd.sealedmedia.softseal-jpg" name="about_us_1" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
    </div>
        </div>
    <div style="width: 45%">
    <div class="form-group">
        <img style="width: 80%;" src="../images/about-us-2.jpg">
    </div>
    <div class="form-group">
        <label for="exampleInputFile">фото 2</label>
        <input type="file" accept="image/vnd.sealedmedia.softseal-jpg" name="about_us_2" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
    </div>
    </div>
    </div>


    <h3>Блок "ЗАЧЕМ ВАМ СВАДЕБНЫЙ ОРГАНИЗАТОР?"</h3>
    <div class="form-group">
        <img style="width: 35%;" src="../images/about-us-bg.jpg">
    </div>
    <div class="form-group">
        <label for="exampleInputFile">фон блока</label>
        <input type="file" accept="image/vnd.sealedmedia.softseal-jpg" name="about_us" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
    </div>


    <h3>Блок "Услуги"</h3>
    <div class="form-group">
        <img style="width: 35%;" src="../images/services-bg.jpg">
    </div>
    <div class="form-group">
        <label for="exampleInputFile">фон блока</label>
        <input type="file" accept="image/vnd.sealedmedia.softseal-jpg" name="services" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
    </div>


    <h3>Блок "ПОЧЕМУ С НАМИ СТОИТ РАБОТАТЬ"</h3>
    <div class="form-group">
        <img style="width: 35%;" src="../images/work-bg.jpg">
    </div>
    <div class="form-group">
        <label for="exampleInputFile">фон блока</label>
        <input type="file" accept="image/vnd.sealedmedia.softseal-jpg" name="work_bg" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
    </div>


    <h3>Блок "ПОРТФОЛИО"</h3>
    <div class="form-group">
        <img style="width: 35%;" src="../images/portfolio-bg.jpg">
    </div>
    <div class="form-group">
        <label for="exampleInputFile">фон блока</label>
        <input type="file" accept="image/vnd.sealedmedia.softseal-jpg" name="portfolio_bg" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
    </div>


    <h3>Блок "ОТЗЫВЫ О НАС"</h3>
    <div class="form-group">
        <img style="width: 35%;" src="../images/reviews-bg.jpg">
    </div>
    <div class="form-group">
        <label for="exampleInputFile">фон блока</label>
        <input type="file" accept="image/vnd.sealedmedia.softseal-jpg" name="reviews_bg" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
    </div>


    <h3>Блок "ЕСТЬ ВОПРОСЫ ПО ОРГАНИЗАЦИИ СВАДЬБЫ?"</h3>
    <div class="form-group">
        <img style="width: 35%;" src="../images/questions-bg.jpg">
    </div>
    <div class="form-group">
        <label for="exampleInputFile">фон блока</label>
        <input type="file" accept="image/vnd.sealedmedia.softseal-jpg" name="questions_bg" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
    </div>


    <h3>Блок "СООБЩИТЕ ВАШИ КОНТАКТЫ И МЫ ВАМ ПЕРЕЗВОНИМ"</h3>
    <div class="form-group">
        <img style="width: 35%;" src="../images/letter-bg.jpg">
    </div>
    <div class="form-group">
        <label for="exampleInputFile">фон блока</label>
        <input type="file" accept="image/vnd.sealedmedia.softseal-jpg" name="letter_bg" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
    </div>
    <h3>Блок "КОНТАКТЫ"</h3>
    <div class="form-group">
        <img style="width: 35%;" src="../images/footer-bg.jpg">
    </div>
    <div class="form-group">
        <label for="exampleInputFile">фон блока</label>
        <input type="file" accept="image/vnd.sealedmedia.softseal-jpg" name="footer_bg" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
    </div>
    <button type="submit" class="btn btn-primary">Сохранить</button>
</form>