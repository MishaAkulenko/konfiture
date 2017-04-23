<?php
/**
 * Created by PhpStorm.
 * User: Feanaro
 * Date: 18.04.2017
 * Time: 0:16
 */
if(!function_exists('db_connect')) {
    require_once("../config/db_config.php");
}
$link = db_connect();

if(isset($_GET['action'])){
    $action = $_GET['action'];
    $id = $_GET['id'];
    if($action == 'delete'){

        review_delete($link, $id);
        header("Location: /admin/?page=review");
        die();
    } else if ($action == 'add'){
        if(isset($_POST['name']) && isset($_POST['text'])){

            $file_name = rus2translit($_POST['name']);
            $info = pathinfo($_FILES["photo"]["name"]);

            $id = review_add($link, $_POST['name'], $_POST['text'], $file_name.'.'.$info['extension']);
            review_update($link, $_POST['name'], $_POST['text'], $file_name."-$id.".$info['extension'], $id);
            if(is_uploaded_file($_FILES["photo"]["tmp_name"]))
            {
                copy($_FILES["photo"]["tmp_name"], "../../images/review/".$file_name.'-'.$id.'.'.$info['extension']);
            } else {
                echo("Ошибка загрузки файла");
            }
            header("Location: /admin/?page=review", true);
            die();
        } else{
        include('./views/review_add.php');
        }
    } elseif ($action == 'edit' && $id){

        $data  = get_review($link, $id);


        if(isset($_POST['name']) && isset($_POST['text'])){
            $file_name = rus2translit($_POST['name']);
            if($_FILES['photo']['name'] && $_FILES['photo']['tmp_name'] && $_FILES['photo']['size']) {
                $info = pathinfo($_FILES["photo"]["name"]);
                if (is_uploaded_file($_FILES["photo"]["tmp_name"])) {
                    @unlink('../images/review/' . $data['photo']);
                    copy($_FILES["photo"]["tmp_name"], "../../images/review/" . $file_name . '-' . $id . '.' . $info['extension']);
                    review_update($link, $_POST['name'], $_POST['text'], $file_name . "-$id." . $info['extension'], $id);
                } else {
                    echo("Ошибка загрузки файла");
                }
            } else{
                review_update($link, $_POST['name'], $_POST['text'], $data['photo'], $id);
            }



            header("Location: /admin/?page=review", true);
            die();
        }

        include('./views/review_add.php');


    }
} elseif(!isset($_POST['data'])) {
    $items = reviews_all($link);
    include('./views/review.php');
}

function reviews_all($link){
    $query = "SELECT * FROM `review` WHERE 1";
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
    $items = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $items[] = $row;
    }
    return $items;
}
function review_delete($link, $id){
    $review = get_review($link, $id);
    $query = "DELETE FROM review WHERE id_review=".$id;
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));

   @unlink('../images/review/'.$review['photo']);
}
function review_add($link, $name, $text, $file_name){
    $query = "INSERT INTO review (id_review, user_name, text, photo) VALUES ('', '".$name."', '".$text."', '".$file_name."')";
    $result = mysqli_query($link, $query);
    if (!$result){
        die(mysqli_error($link));
    }
    return mysqli_insert_id($link);
}
function review_update($link, $name, $text, $file_name, $id_review){
    $query = "UPDATE review SET user_name='".$name."', text='".$text."', photo='".$file_name."' WHERE id_review=".$id_review;
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));
}
function get_review($link, $id){

    $query = "SELECT * FROM review WHERE id_review = ".$id;
    $result = mysqli_query($link, $query);
    if (!$result)
        die(mysqli_error($link));


    return mysqli_fetch_assoc($result);

}