<?php
require "./opdracht/config.inc.php";


$data = array();
parse_str($_POST['data'], $data);

$gender = $data['gender'];
$first_name = $data['first_name'];
$last_name = $data['last_name'];
$birth_date = $data['birth_date'];
$member_since = $data['member_since'];

$query = "INSERT INTO `back2_leden` (`gender`, `first_name`, `last_name`, `birth_date`, `member_since`) 
            VALUES ('$gender', '$first_name', '$last_name', '$birth_date', '$member_since')";   

if ($link->query($query)) {
    echo "OK";
    
} else{
    echo "ERROR";
}