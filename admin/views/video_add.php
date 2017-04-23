<?php
/**
 * Created by PhpStorm.
 * User: Feanaro
 * Date: 18.04.2017
 * Time: 0:45
 */
?>

<h2><?php echo ($action == 'add'? 'Добавить видео' : 'Редактировать видео')?></h2>

<form class="col-md-7" method="post" action="./services/video.php?action=<?=$action?><?php echo ($action == 'edit' ? '&id='.$data['id_review'] : '')?>" enctype="multipart/form-data">
    <div class="input-group input-group-lg">
        <span class="input-group-addon" id="sizing-addon1">Имя Пары</span>
        <input value='<?php echo ($data['user_name'] && $action == 'edit' ? $data['user_name'] : "")?>' required type="text" class="form-control" name="name" placeholder="Имя Пары" aria-describedby="sizing-addon1">
    </div>
    <br>
    <div class="form-group">
        <label for="exampleTextarea">Ссылка на видео</label>
        <input value='<?php echo ($data['link'] && $action == 'edit' ? $data['user_name'] : "")?>' required type="text" class="form-control" name="link" placeholder="youtube link" aria-describedby="sizing-addon1">
    </div>
    <?if ($data['preview'] && $action == 'edit'):?>
    <div class="form-group">
        <img style="width: 40%;" src="../images/review/<?php echo ($data['photo'] && $action == 'edit' ? $data['preview'] : "")?>">
    </div>
    <?endif?>
    <div class="form-group">
        <label for="exampleInputFile">Аватар пользователя</label>
        <input type="file" accept="image/*" name="preview" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
    </div>
    <button type="submit" class="btn btn-primary">Сохранить</button>
</form>
