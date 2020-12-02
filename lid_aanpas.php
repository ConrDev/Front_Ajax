<?php
require "./opdracht/config.inc.php";


$data = array();
parse_str($_POST['data'], $data);

$id = $data['id'];
$gender = $data['gender'];
$first_name = $data['first_name'];
$last_name = $data['last_name'];
$birth_date = $data['birth_date'];
$member_since = $data['member_since'];

$query = "UPDATE back2_leden SET first_name='{$first_name}', last_name='{$last_name}', birth_date='{$birth_date}', gender='{$gender}', member_since='{$member_since}' WHERE id='{$id}'";

if ($link->query($query)) {
    echo "OK";
    
} else{
    echo "ERROR";
}