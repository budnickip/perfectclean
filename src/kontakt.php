<?php
$errors = '';
$myemail = 'biuro@perfectclean.szczecin.pl';//<-----Put Your email address here.
if(empty($_POST['name'])  ||
   empty($_POST['email']) ||
   empty($_POST['message']) ||
   empty($_POST['topic']))
{
    $errors .= "\n Error: all fields are required";
}
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
$topic = $_POST['topic'];
if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
$to = $myemail;
$email_subject = "Kontakt od: $name";
$email_body = "Otrzymałeś nową wiadomość. ".
" Szczegóły:\n Name: $name \n ".
"Temat: $topic \n".
"Email: $email_address\n Message \n $message";
$headers = "From: $myemail\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
//redirect to the 'thank you' page
//header('Location: contact-form-thank-you.html');
}
?>