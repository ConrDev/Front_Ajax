<?php
// Dit zijn de MYSQL inloggegevens.
define('SERVER', 'localhost');
define('USERNAME', 'root');
define('PASSWORD', '');
define('NAME', 'back2');

$link = mysqli_connect(SERVER, USERNAME, PASSWORD, NAME);

if ($link === false) die('ERROR: Could not connect. ' . mysqli_connect_error());

?>
