<?
$to =  'Dmitryipr@mail.ru'; // Почта получателя, через запятую можно указать сколько угодно адресов
$subject = 'Обратный звонок'; // Загаловок сообщения
$message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['user_name'].'</p>
                        <p>Email: '.$_POST['user_email'].'</p>                        
                        <p>Телефон: '.$_POST['user_number'].'</p>                        
                        <p>Сообщение: '.$_POST['user_message'].'</p>                        
                    </body>
                </html>';
$headers  = "Content-type: text/html; charset=utf-8 \r\n"; // Кодировка письма
$headers .= "From: Обратный звонок с сайта <from@example.com>\r\n"; // Наименование и почта отправителя
mail($to, $subject, $message, $headers); // Отправка письма с помощью функции mail

// Dmitryipr@mail.ru