<?php
/**
 * Created by PhpStorm.
 * User: Feanaro
 * Date: 18.04.2017
 * Time: 0:45
 */
?>

<h2><?php echo ($action == 'add'? 'Добавить альбом' : 'Редактировать альбом')?></h2>

<form style="    margin-bottom: 30px;" class="col-md-12" method="post" action="./services/album.php?action=<?=$action?><?php echo ($action == 'edit' ? '&id='.$data['id_album'] : '')?>" enctype="multipart/form-data">
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
            <img style="width: 35%;" src="../images/galery/<?=$data['name_translit']?>/<?php echo ($data['preview'] && $action == 'edit' ? $data['preview'] : "")?>">
        </div>
    <?endif?>
    <div class="form-group">
        <label for="exampleInputFile">Превью альбома</label>
        <input type="file" accept="image/*" name="preview" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
    </div>
    <button type="submit" class="btn btn-primary">Сохранить</button>
</form>

<h2>Фотографии альбома</h2>
<table id="dataTable" class="table  table-bordered table-hover table-responsive">
    <thead>
    <tr>
        <?php if($photos):?>
        <?php foreach ($photos as $i):
            foreach ($i as $key => $v): ?>
                <th><?=$key?></th>
            <?php endforeach;
            break;?>
        <?php endforeach ?>
        <? endif?>
        <th style="max-width: 50px;">
            <form enctype="multipart/form-data" action="./services/album.php?action=add_photo&id_album=<?=$data['id_album']?>" method="post"><input type="submit" value="Добавить">
                <input multiple type="file" accept="image/*" required name="photo[]" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
            </form>
        </th>
    </tr>
    </thead>
    <tbody>
    <?php if($photos):?>
    <?php foreach ($photos as $i):?>
        <tr>
            <?php foreach ($i as $key => $v):?>
                <?if($key == 'photo_name'):?>
                    <td style='background-size: contain !important;
                        height: 100px;width: 100px; background-position: center  !important; background-repeat: no-repeat !important;
                        background: url("../images/galery/<?=$data['name_translit']?>/<?=$v?>")' >
                    </td>
                <? else: ?>
                    <td>
                        <?=$v?>
                    </td>
                <? endif?>

            <?php endforeach ?>
            <td id="buttonTh"><a style="70px margin-top: 5px;" class="btn btn-danger" href="./services/album.php?action=delete_photo&id_photo=<?php echo $i['id_photo']?>&id_album=<?=$data['id_album']?>" >Delete</a>
            </td>
        </tr>
    <?php endforeach?>
    <?endif?>
    </tbody>
</table>