
<?php

date_default_timezone_set('Africa/Casablanca');
include 'loadingPage.html';
require 'connexion.php';
// Récupérer les données du formulaire
$nomPrenom = $_POST['senderName'];
$ville = $_POST['senderVille'];
$tel = $_POST['senderTel'];
$email = $_POST['senderEmail'];
$typeLocal = $_POST['ProOrPar'];
$sujet = $_POST['selectedSubject'];
$message= $_POST['senderMessage'];
$sujetAutre = $_POST['messageSubject3'];
if ($sujet =='' || $sujet == 'Autre')
 {
    $sujet = $sujetAutre;
}

$date = new DateTime();
$dateActuelle = $date->format('Y-m-d H:i:s');
// Insérer les données dans la base de données
$insertion = "INSERT INTO contact (nomPrenom, ville, tel, email, typeLocal, sujet, message,dateSoumission) 
              VALUES ('$nomPrenom', '$ville', '$tel', '$email', '$typeLocal', '$sujet', '$message','$dateActuelle')";

if (mysqli_query($connexion, $insertion)) {
    include 'mail.php';
 
    ?>
    <script>
   let countdown = 5;

function updateCountdown() {
    if (countdown >= 0) {
        document.getElementById('countdown-item').textContent = countdown;
        if (countdown === 0) {
            document.getElementById('countdown-item').innerHTML = '<i class="fas fa-check"></i>';
               setTimeout(function() {
                alert("Votre message a été envoyé avec succès.");
                location.replace("index.html");
        },1000); 
            
        }
        countdown--;
    } else {
        clearInterval(timer);
    }
}

let timer = setInterval(updateCountdown, 1000);
</script>
    <?php
   
} else {
    ?>
    <script>
        if (countdown === 0) {
            document.getElementById('countdown-item').innerHTML = '<i class="fas fa-times"></i>';
                alert("Votre message n'été pas envoyé.");
                location.replace("index.html");
        }
        countdown--;
    </script>
    <?php
    }

    
// Fermer la connexion
mysqli_close($connexion);
?>
