<?php
/**
 * Created by PhpStorm.
 * User: Feanaro
 * Date: 18.04.2017
 * Time: 0:45
 */
?>

<h2><?php echo ($action == 'add'? 'Добавить новость' : 'Редактировать новость')?></h2>

<form class="col-md-12" method="post" action="./services/news.php?action=<?=$action?><?php echo ($action == 'edit' ? '&id='.$data['id_news'] : '')?>" enctype="multipart/form-data">
    <div class="input-group input-group-lg">
        <span class="input-group-addon" id="sizing-addon1">Название новости</span>
        <input value='<?php echo ($data['title'] && $action == 'edit' ? $data['title'] : "")?>' required type="text" class="form-control" name="title" placeholder="заголовок новости" aria-describedby="sizing-addon1">
    </div>
    <div style="margin-top: 20px" class="form-group">
        <label for="exampleSelect1">Тип</label>
        <select name="type" class="form-control" id="exampleSelect1">
            <option value="trends" <?=($data['type'] == 'trends' && $action == 'edit' ? 'selected' : '')?>>Тренды и советы</option>
            <option value="news" <?=($data['type'] == 'news' && $action == 'edit' ? 'selected' : '')?>>Новости</option>
        </select>
    </div>
    <br>
    <div class="form-group">
        <label for="exampleTextarea">Главный текст новости</label>
        <textarea required class="form-control" name="text" id="exampleTextarea" rows="8"><?php echo ($data['text'] && $action == 'edit' ? $data['text'] : "")?></textarea>
    </div>
    <?if ($data['preview'] && $action == 'edit'):?>
    <div class="form-group">
        <img style="width: 40%;" src="../images/news/<?=$data['link_rewrite']?>/<?php echo ($data['preview'] && $action == 'edit' ? $data['preview'] : "")?>">
    </div>
    <?endif?>
    <div class="form-group">
        <label for="exampleInputFile">Превью фото</label>
        <input type="file" required accept="image/*" name="preview" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
    </div>

    <h2 style="margin-top: 20px;margin-bottom: 20px">Шахматный блок</h2>
    <?if ($data['chess_block_photo_1'] && $action == 'edit'):?>
        <div class="form-group">
            <img style="width: 40%;" src="../images/news/<?=$data['link_rewrite']?>/<?php echo ($data['chess_block_photo_1'] && $action == 'edit' ? $data['chess_block_photo_1'] : "")?>">
        </div>
    <?endif?>
    <div class="form-group">
        <label for="exampleInputFile">Первое фото шахматного блока</label>
        <input type="file" required accept="image/*" name="chess_block_photo_1" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
    </div>
    <div class="form-group">
        <label for="exampleTextarea">Первый текст шахматного блока</label>
        <textarea required class="form-control" name="chess_block_text_1" id="exampleTextarea" rows="8"><?php echo ($data['chess_block_text_1'] && $action == 'edit' ? $data['chess_block_text_1'] : "")?></textarea>
    </div>

    <?if ($data['chess_block_photo_2'] && $action == 'edit'):?>
        <div class="form-group">
            <img style="width: 40%;" src="../images/news/<?=$data['link_rewrite']?>/<?php echo ($data['chess_block_photo_2'] && $action == 'edit' ? $data['chess_block_photo_2'] : "")?>">
        </div>
    <?endif?>
    <div class="form-group">
        <label for="exampleInputFile">Второе фото шахматного блока</label>
        <input type="file" required accept="image/*" name="chess_block_photo_2" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
    </div>
    <div class="form-group">
        <label for="exampleTextarea">Второй текст шахматного блока</label>
        <textarea required class="form-control" name="chess_block_text_2" id="exampleTextarea" rows="8"><?php echo ($data['chess_block_text_2'] && $action == 'edit' ? $data['chess_block_text_2'] : "")?></textarea>
    </div>


    <div class="form-group">
        <label for="exampleTextarea">Второй текст основного блока</label>
        <textarea required class="form-control" name="second_text" id="exampleTextarea" rows="8"><?php echo ($data['second_text'] && $action == 'edit' ? $data['second_text'] : "")?></textarea>
    </div>

    <div style="margin-bottom: 15px" class="input-group input-group-lg">
        <span class="input-group-addon" id="sizing-addon1">Ссылка на видео</span>
        <input value='<?php echo ($data['video_link'] && $action == 'edit' ? $data['video_link'] : "")?>'  type="text" class="form-control" name="video_link" placeholder="ссылка на видео" aria-describedby="sizing-addon1">
    </div>

    <div class="form-group">
        <label for="exampleTextarea">Заключительный текст (после видео и фото, если они есть)</label>
        <textarea required class="form-control" name="end_text" id="exampleTextarea" rows="8"><?php echo ($data['end_text'] && $action == 'edit' ? $data['end_text'] : "")?></textarea>
    </div>
    <button style="margin-bottom: 30px" type="submit" class="btn btn-primary">Сохранить</button>
</form>

<h2 >Фотографии новости</h2>
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
            <form enctype="multipart/form-data" action="./services/news.php?action=add_photo&id_news=<?=$data['id_news']?>" method="post"><input type="submit" value="Добавить">
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
                <?if($key == 'photo'):?>
                    <td style='background-size: contain !important;
                        height: 100px;width: 100px; background-position: center  !important; background-repeat: no-repeat !important;
                        background: url("../images/news/<?=$data['link_rewrite']?>/<?=$v?>")' >
                    </td>
                <? else: ?>
                    <td>
                        <?=$v?>
                    </td>
                <? endif?>

            <?php endforeach ?>
            <td id="buttonTh"><a style="70px margin-top: 5px;" class="btn btn-danger" href="./services/news.php?action=delete_photo&id_photo=<?php echo $i['id_photo']?>&id_news=<?=$data['id_news']?>" >Delete</a>
            </td>
        </tr>
    <?php endforeach ?>
    <? endif?>
    </tbody>
</table>