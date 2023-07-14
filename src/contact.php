<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les valeurs des champs du formulaire
    $firstName = $_POST["first-name"];
    $lastName = $_POST["last-name"];
    $email = $_POST["email"];
    $arrivalDate = $_POST["arrivaldate"];
    $departureDate = $_POST["departuredate"];
    $message = $_POST["message"];

    // Préparer les données pour l'e-mail
    $subject = "Nouveau formulaire soumis";
    $emailBody = "Un nouveau formulaire a été soumis.\n\n";
    $emailBody .= "Prénom : " . $firstName . "\n";
    $emailBody .= "Nom : " . $lastName . "\n";
    $emailBody .= "E-mail : " . $email . "\n";
    $emailBody .= "Date d'arrivée : " . $arrivalDate . "\n";
    $emailBody .= "Date de départ : " . $departureDate . "\n";
    $emailBody .= "Message : " . $message . "\n";

    // Paramètres de l'e-mail
    $to = "david.heimfert@gmail.com";
    $headers = "From: " . "web@discoverstbarths.com" . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    // Envoyer l'e-mail
    if (mail($to, $subject, $emailBody, $headers)) {
        echo "Le formulaire a été soumis avec succès. Un e-mail a été envoyé.";
    } else {
        echo "Une erreur s'est produite lors de l'envoi de l'e-mail.";
    }
}
?>