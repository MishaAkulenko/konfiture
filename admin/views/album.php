<?php
/**
 * Created by PhpStorm.
 * User: Feanaro
 * Date: 18.04.2017
 * Time: 0:45
 */
?>
<table id="dataTable" class="table  table-bordered table-hover table-responsive">
    <h2>Альбомы</h2>
    <thead>
    <tr>
        <?php foreach ($items as $i):
            foreach ($i as $key => $v): ?>
                <th><?=$key?></th>
            <?php endforeach;
            break;?>
            <th></th>
        <?php endforeach ?>
        <th><a href="./?page=album&action=add" class="btn btn-default" >Add</a></th>
    </tr>
    </thead>
    <tbody>
    <?php foreach ($items as $i):?>
        <tr>
            <?php foreach ($i as $key => $v):?>
                <?if($key == 'preview'):?>
                    <td style='background-size: contain !important;
                        height: 100px;width: 100px; background-position: center  !important; background-repeat: no-repeat !important;
                        background: url("../images/galery/<?=$i['name_translit']?>/<?=$v?>")' >
                    </td>
                <? else: ?>
                    <td>
                        <?=$v?>
                    </td>
                <? endif?>

            <?php endforeach ?>
            <td id="buttonTh"><a style="70px margin-top: 5px;" class="btn btn-danger" href="./services/album.php?action=delete&id=<?php echo $i['id_album']?>" >Delete</a>
                <a style="70px margin-top: 5px;" class="btn btn-info" href="./?page=album&action=edit&id=<?php echo $i['id_album']?>" >Edit</a>
            </td>
        </tr>
    <?php endforeach ?>
    </tbody>
</table>