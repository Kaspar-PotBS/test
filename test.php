<?php
function console_log($output, $with_script_tags = true) {
    $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) . 
');';
    if ($with_script_tags) {
        $js_code = '<script>' . $js_code . '</script>';
    }
    echo $js_code;
}
?>




<br>71<br>

<?php
$responddump = 0;
ob_implicit_flush();
error_reporting(0);
$fp = fsockopen("208.70.79.71", 7011, $errno, $errstr, 5);
if (!$fp) {
switch ($errno) {
  case "10060":
	echo '<b><font color="red">Timeout (10060)</font></b>';
	$view_variable = $errstr;
	console_log($view_variable);
    break;
  case "10061":
	echo '<b><font color="red">Refused (10061)</font></b>';
    break;
  case "10064":
	echo '<b><font color="red">Host down (10064)</font></b>';
    break;
  case "10065":
	echo '<b><font color="red">Unreachable (10065)</font></b>';
    break;
  default:
    echo "Unknown";
	
}

} else {
	echo '<b><font color="green">OK (0)</font></b>';
	$view_variable = $errstr;
	console_log($view_variable);
	
  $out = "GET / HTTP/1.1\r\n";
  $out .= "Host: .com\r\n";
  $out .= "Connection: Close\r\n\r\n";
  fwrite($fp, $out);
  while (!feof($fp)) {
    $responddump = fgets($fp, 256);
  }
  fclose($fp);
}
?>

<?php

$haystack = $responddump;
$needle   = 'fls';

if (strpos($haystack, $needle) !== false) {
    echo 'Game Respond';
}
?>

<br>72<br>

<?php
$responddump = 0;
ob_implicit_flush();
error_reporting(0);
$fp = fsockopen("208.70.79.72", 7011, $errno, $errstr, 5);
if (!$fp) {
switch ($errno) {
  case "10060":
	echo '<b><font color="red">Timeout (10060)</font></b>';
	$view_variable = $errstr;
	console_log($view_variable);
    break;
  case "10061":
	echo '<b><font color="red">Refused (10061)</font></b>';
    break;
  case "10064":
	echo '<b><font color="red">Host down (10064)</font></b>';
    break;
  case "10065":
	echo '<b><font color="red">Unreachable (10065)</font></b>';
    break;
  default:
    echo "Unknown";
	
}

} else {
	echo '<b><font color="green">OK (0)</font></b>';
	$view_variable = $errstr;
	console_log($view_variable);
	
  $out = "GET / HTTP/1.1\r\n";
  $out .= "Host: .com\r\n";
  $out .= "Connection: Close\r\n\r\n";
  fwrite($fp, $out);
  while (!feof($fp)) {
    $responddump = fgets($fp, 256);
  }
  fclose($fp);
}
?>

<?php

$haystack = $responddump;
$needle   = 'fls';

if (strpos($haystack, $needle) !== false) {
    echo 'Game Respond';
}
?>

<br>73<br>

<?php
$responddump = 0;
ob_implicit_flush();
error_reporting(0);
$fp = fsockopen("208.70.79.73", 7011, $errno, $errstr, 5);
if (!$fp) {
switch ($errno) {
  case "10060":
	echo '<b><font color="red">Timeout (10060)</font></b>';
	$view_variable = $errstr;
	console_log($view_variable);
    break;
  case "10061":
	echo '<b><font color="red">Refused (10061)</font></b>';
    break;
  case "10064":
	echo '<b><font color="red">Host down (10064)</font></b>';
    break;
  case "10065":
	echo '<b><font color="red">Unreachable (10065)</font></b>';
    break;
  default:
    echo "Unknown";
	
}

} else {
	echo '<b><font color="green">OK (0)</font></b>';
	$view_variable = $errstr;
	console_log($view_variable);
	
  $out = "GET / HTTP/1.1\r\n";
  $out .= "Host: .com\r\n";
  $out .= "Connection: Close\r\n\r\n";
  fwrite($fp, $out);
  while (!feof($fp)) {
    $responddump = fgets($fp, 256);
  }
  fclose($fp);
}
?>

<?php

$haystack = $responddump;
$needle   = 'fls';

if (strpos($haystack, $needle) !== false) {
    echo 'Game Respond';
}
?>

<br>75<br>

<?php
$responddump = 0;
ob_implicit_flush();
error_reporting(0);
$fp = fsockopen("208.70.79.75", 7011, $errno, $errstr, 5);
if (!$fp) {
switch ($errno) {
  case "10060":
	echo '<b><font color="red">Timeout (10060)</font></b>';
	$view_variable = $errstr;
	console_log($view_variable);
    break;
  case "10061":
	echo '<b><font color="red">Refused (10061)</font></b>';
    break;
  case "10064":
	echo '<b><font color="red">Host down (10064)</font></b>';
    break;
  case "10065":
	echo '<b><font color="red">Unreachable (10065)</font></b>';
    break;
  default:
    echo "Unknown";
	
}

} else {
	echo '<b><font color="green">OK (0)</font></b>';
	$view_variable = $errstr;
	console_log($view_variable);
	
  $out = "GET / HTTP/1.1\r\n";
  $out .= "Host: .com\r\n";
  $out .= "Connection: Close\r\n\r\n";
  fwrite($fp, $out);
  while (!feof($fp)) {
    $responddump = fgets($fp, 256);
  }
  fclose($fp);
}
?>

<?php

$haystack = $responddump;
$needle   = 'fls';

if (strpos($haystack, $needle) !== false) {
    echo 'Game Respond';
}
?>