<?php
/**
 * Created by PhpStorm.
 * User: eiiikunkot
 * Date: 17.05.17
 * Time: 12:17
 */
?>

<h2>Настройки</h2>

<form style="    margin-bottom: 30px;" class="col-md-12" method="post" action="./services/settings.php?action=update" enctype="multipart/form-data">

    <div style="margin-bottom: 20px" class="input-group input-group-lg">
        <span class="input-group-addon" id="sizing-addon1">Цена организации</span>
        <input value='<?php echo ($data['organisation_price'] ? $data['organisation_price'] : "")?>'  type="text" class="form-control" name="organisation_price"  aria-describedby="sizing-addon1">
    </div>

    <div style="margin-bottom: 20px" class="input-group input-group-lg">
        <span class="input-group-addon" id="sizing-addon1">Цена координации</span>
        <input value='<?php echo ($data['coordination_price'] ? $data['coordination_price'] : "")?>'  type="text" class="form-control" name="coordination_price"  aria-describedby="sizing-addon1">
    </div>

    <div style="margin-bottom: 20px" class="input-group input-group-lg">
        <span class="input-group-addon" id="sizing-addon1">Email для уведомлений</span>
        <input value='<?php echo ($data['main_email'] ? $data['main_email'] : "")?>'  type="email" class="form-control" name="main_email"  aria-describedby="sizing-addon1">
    </div>

    <div style="margin-bottom: 20px" class="input-group input-group-lg">
        <span class="input-group-addon" id="sizing-addon1">Email по вопросам организации</span>
        <input value='<?php echo ($data['organisation_mail'] ? $data['organisation_mail'] : "")?>'  type="email" class="form-control" name="organisation_mail"  aria-describedby="sizing-addon1">
    </div>

    <div style="margin-bottom: 20px" class="input-group input-group-lg">
        <span class="input-group-addon" id="sizing-addon1">Email по вопросам сотрудничества</span>
        <input value='<?php echo ($data['partner_mail'] ? $data['partner_mail'] : "")?>'  type="text" class="form-control" name="partner_mail"  aria-describedby="sizing-addon1">
    </div>
    <button type="submit" class="btn btn-primary">Сохранить</button>
</form>

