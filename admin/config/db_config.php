<?php
/**
 * Created by PhpStorm.
 * User: Feanaro
 * Date: 17.04.2017
 * Time: 21:17
 */
ini_set('display_errors',1);
error_reporting(E_ALL);
define('MYSQL_SERVER', '127.0.0.1');
define('MYSQL_USER', 'root');
<<<<<<< HEAD
define('MYSQL_PASSWORD', '');
=======
define('MYSQL_PASSWORD', '1234');
>>>>>>> ec30c286ca97dc02af2ea893c2c14fd25c107678
define('MYSQL_DB', 'konfiture');

function db_connect(){
    $link = mysqli_connect(MYSQL_SERVER, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB)
    or die("Error: ".mysqli_error($link));
    if(!mysqli_set_charset($link, "utf8")){
        printf("Error: ".mysqli_error($link));
    }
    return $link;
}

function rus2translit($string) {

    $converter = array(
        'а' => 'a', 'б' => 'b', 'в' => 'v',
        'г' => 'g', 'д' => 'd', 'е' => 'e',
        'ё' => 'e', 'ж' => 'zh', 'з' => 'z',
        'и' => 'i', 'й' => 'y', 'к' => 'k',
        'л' => 'l', 'м' => 'm', 'н' => 'n',
        'о' => 'o', 'п' => 'p', 'р' => 'r',
        'с' => 's', 'т' => 't', 'у' => 'u',
        'ф' => 'f', 'х' => 'h', 'ц' => 'c',
        'ч' => 'ch', 'ш' => 'sh', 'щ' => 'sch',
        'ь' => '', 'ы' => 'y', 'ъ' => '',
        'э' => 'e', 'ю' => 'yu', 'я' => 'ya',
        'А' => 'A', 'Б' => 'B', 'В' => 'V',
        'Г' => 'G', 'Д' => 'D', 'Е' => 'E',
        'Ё' => 'E', 'Ж' => 'Zh', 'З' => 'Z',
        'И' => 'I', 'Й' => 'Y', 'К' => 'K',
        'Л' => 'L', 'М' => 'M', 'Н' => 'N',
        'О' => 'O', 'П' => 'P', 'Р' => 'R',
        'С' => 'S', 'Т' => 'T', 'У' => 'U',
        'Ф' => 'F', 'Х' => 'H', 'Ц' => 'C',
        'Ч' => 'Ch', 'Ш' => 'Sh', 'Щ' => 'Sch',
        'Ь' => '', 'Ы' => 'Y', 'Ъ' => '',
        'Э' => 'E', 'Ю' => 'Yu', 'Я' => 'Ya',' '=>'-'
    );
    $string = strtr($string, $converter);
    //$string = preg_replace("#[.,]#isu", "", $string);
    //$string = preg_replace("#[^A-Za-z0-9\-]#isu", "_", $string);
    return $string;
}
function removeDirectory($dir) {
    if ($objs = glob($dir."/*")) {
        foreach($objs as $obj) {
            is_dir($obj) ? removeDirectory($obj) : @unlink($obj);
        }
    }
    @rmdir($dir);
}

function get_topic_by_link($link, $news_link){

    $query = 'SELECT * FROM news WHERE link_rewrite = "'.$news_link.'"';
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));


    return mysqli_fetch_assoc($result);

}