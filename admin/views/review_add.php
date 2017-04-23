<?php
/**
 * Created by PhpStorm.
 * User: Feanaro
 * Date: 18.04.2017
 * Time: 0:45
 */
?>

<h2><?php echo ($action == 'add'? 'Добавить отзыв' : 'Редактировать Отзыв')?></h2>

<form class="col-md-7" method="post" action="./services/review.php?action=<?=$action?><?php echo ($action == 'edit' ? '&id='.$data['id_review'] : '')?>" enctype="multipart/form-data">
    <div class="input-group input-group-lg">
        <span class="input-group-addon" id="sizing-addon1">Имя</span>
        <input value='<?php echo ($data['user_name'] && $action == 'edit' ? $data['user_name'] : "")?>' required type="text" class="form-control" name="name" placeholder="Имя пользователя" aria-describedby="sizing-addon1">
    </div>
    <br>
    <div class="form-group">
        <label for="exampleTextarea">Текст отзыва</label>
        <textarea required class="form-control" name="text" id="exampleTextarea" rows="8"><?php echo ($data['text'] && $action == 'edit' ? $data['text'] : "")?></textarea>
    </div>
    <?if ($data['photo'] && $action == 'edit'):?>
    <div class="form-group">
        <img style="width: 40%;" src="../images/review/<?php echo ($data['photo'] && $action == 'edit' ? $data['photo'] : "")?>">
    </div>
    <?endif?>
    <div class="form-group">
        <label for="exampleInputFile">Аватар пользователя</label>
        <input type="file" accept="image/*" name="photo" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
    </div>
    <button type="submit" class="btn btn-primary">Сохранить</button>
</form>
