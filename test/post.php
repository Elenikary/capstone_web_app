<?php
$time = time();
$tempF = $_POST["color"];
$file = 'home_page.html';
//$data = $time."  -  ".$tempF;
$data = " data ";
file_put_contents($file, $data);
?>