<?php
/**
 * Created by PhpStorm.
 * User: Feanaro
 * Date: 18.04.2017
 * Time: 0:45
 */
?>

<h2><?php echo ($action == 'add'? 'Добавить альбом' : 'Редактировать альбом')?></h2>

<form class="col-md-7" method="post" action="./services/album.php?action=<?=$action?><?php echo ($action == 'edit' ? '&id='.$data['id_album'] : '')?>" enctype="multipart/form-data">
    <div class="input-group input-group-lg">
        <span class="input-group-addon" id="sizing-addon1">Название альбома</span>
        <input value='<?php echo ($data['name'] && $action == 'edit' ? $data['name'] : "")?>' required type="text" class="form-control" name="name" placeholder="Название альбома" aria-describedby="sizing-addon1">
    </div>
    <br>
   <!-- <div class="form-group">
        <label for="exampleTextarea">Link rewrite</label>
        <input value='<?php /*echo ($data['name_translit'] && $action == 'edit' ? $data['name_translit'] : "")*/?>' required type="text" class="form-control" name="name_translit" placeholder="link rewrite" aria-describedby="sizing-addon1">
    </div>-->
    <?if ($data['preview'] && $action == 'edit'):?>
        <div class="form-group">
            <img style="width: 40%;" src="../images/galery/<?=$data['name_translit']?>/<?php echo ($data['preview'] && $action == 'edit' ? $data['preview'] : "")?>">
        </div>
    <?endif?>
    <div class="form-group">
        <label for="exampleInputFile">Превью альбома</label>
        <input type="file" accept="image/*" name="preview" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
    </div>
    <button type="submit" class="btn btn-primary">Сохранить</button>
</form>
