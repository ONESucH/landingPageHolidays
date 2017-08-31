<?php
$method = $_SERVER['REQUEST_METHOD'];
$admin_email = "email@email.com";
$application = "Новая заявка с сайта";

$c = true;
if ($method === 'POST') {
    $user_name = trim($_POST["user_name"]);
    $user_email = trim($_POST["user_email"]);
    $user_number = trim($_POST["user_number"]);
    $user_message = trim($_POST["user_message"]);
    foreach ($_POST as $key => $value) {
        if ($value != "" && $key != "user_name" && $key != "user_email" && $key != "user_message" && $key != "$user_number") {
            $message .= "
			" . (($c = !$c) ? '<tr>' : '<tr style="background:#f8f8f8;">') . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
        }
    }
} else if ($method === 'GET') {
    $user_name = trim($_GET["user_name"]);
    $user_email = trim($_GET["user_email"]);
    $user_number = trim($_POST["user_number"]);
    $user_message = trim($_GET["user_message"]);
    foreach ($_GET as $key => $value) {
        if ($value != "" && $key != "user_name" && $key != "user_email" && $key != "user_message" && $key != "$user_number") {
            $message .= "
			" . (($c = !$c) ? '<tr>' : '<tr style="background:#f8f8f8;">') . "
			<td style='padding:10px;border:1px solid #e9e9e9;'><b>$key</b></td>
			<td style='padding:10px;border:1px solid #e9e9e9;'>$value</td>
		</tr>
		";
        }
    }
}

$message ="<table style='width:100%;'>$message</table>";

function adopt($text) {
    return '=?UTF-8?B?' . base64_encode($text) . '?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
    "Content-Type: text/html; charset=utf-8" . PHP_EOL .
    'From: ' . adopt($message) . ' <' . $application . '>' . PHP_EOL .
    'Reply-To: ' . $application . '' . PHP_EOL;

mail($admin_email, adopt($message), $message, $headers);