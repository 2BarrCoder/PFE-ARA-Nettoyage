<html>


<?php 
    require 'vendor/autoload.php';
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    $mail = new PHPMailer(true);
    // Paramètres SMTP
    // Paramètres du serveur SMTP de Gmail
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';  // Hôte SMTP de Gmail
    $mail->SMTPAuth = true;
    $mail->Username = 'contact.ara.nettoyage@gmail.com'; // Votre adresse e-mail Gmail
    $mail->Password = 'aymjbrlogumwpphv';  // Mot de passe d'application Gmail
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;  // Port TLS de Gmail
    // Contenu de l'e-mail
    $mail->isHTML(true);
    // Adresse de l'expéditeur et du destinataire, sujet, contenu, etc.
    $recipient = "contact.ara.nettoyage@gmail.com"; // Adresse e-mail du destinataire
    $mail->setFrom('contact.ara.nettoyage@gmail.com', 'ARA Nettoyage Casablanca');
    $mail->addAddress($recipient);
    $mail->Subject = 'Message de Formulaire de Contact';
   
    $mail->Body = '
    <html>
    <head>
    <style>
       

        .containerMessageSmall {
            
            background-color : #d7e5dc;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        .h1MessageSmall {
            font-size: 25px;
            text-align: center;
            color: #4e6ca9;
        }
        .pMessageSmall {
            color: #000;
            font-size: 16px;
        }
        .pEnvoie {
            margin-left:43%;
            display: inline;
            color: #555;
            font-size: 10px;
            padding: 3px;
        }   
        table {
            border-collapse: collapse;
        }
        
        td {
            padding: 0;
        }
    
    </style>
</head>
<body>
<div class="containerMessageSmall" id="containerMessageSmall">
    <table align="center">
        <tbody><tr>
            <td width="50">
                <img src="https://live.staticflickr.com/65535/53183748080_9abdd59510_o.png" width="100" height="40" style="margin-top: 13px" alt="ARA Nettoyage Casablanca">
            </td>
        </tr>
    </tbody></table>
    <h1 class="h1MessageSmall">Message</h1>
    <table>
        <tbody>
            <tr>
                <td>
                    <p class="pMessageSmall"><b>Nom et Prénom:</b>  ' . $nomPrenom . '</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="pMessageSmall"><b>E-mail:</b>  ' . $email . '</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="pMessageSmall"><b>Téléphone:</b>  ' . $tel . '</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="pMessageSmall"><b>Ville:</b>  ' . $ville . '</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="pMessageSmall"><b>Type de Local:</b>  ' . $typeLocal . '</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="pMessageSmall"><b>Sujet:</b>  ' . $sujet . '</p>
                </td>
            </tr>
        </tbody>
    </table>
    <p style="
        width: 90%;
        color: #000;
        font-size: 15px;
        padding: 10px;
        text-align: left;
        ">
         ' . nl2br($message) . '
    </p>
    <p class="pEnvoie">
        <b>Date d\'envoi:</b>
        ' . $dateActuelle . '
    </p>
</div>
  </body>
  </html>';
    try {
        // Envoyer l'e-mail
        $mail->send();
        // Si l'e-mail est envoyé avec succès
        //echo 'L\'e-mail a été envoyé avec succès';
    } catch (Exception $e) {
        // En cas d'erreur lors de l'envoi
        //echo 'Erreur lors de l\'envoi de l\'e-mail : ', $mail->ErrorInfo;
    }
?>
</html>