let lastPhoneNumber = ''; // Garder en mémoire la dernière valeur validée

function formatPhoneNumber(input) {
  const phoneNumber = input.value.replace(/\D/g, ''); // Supprime tous les caractères non numériques

  if (phoneNumber === '') {
    // Le champ est vide, ne rien faire ou afficher un message d'erreur discret
  } else if (phoneNumber.length === 9 && phoneNumber[0] !== '0') {
    input.value = `0${phoneNumber}`;
    lastPhoneNumber = input.value; // Mettre à jour la dernière valeur
  } else if (phoneNumber.length === 10 && phoneNumber[0] === '0') {
    input.value = phoneNumber;
    lastPhoneNumber = input.value; // Mettre à jour la dernière valeur
  } else if (phoneNumber.length === 10 && phoneNumber[0] !== '0') {
    // Gérer les erreurs si la longueur est de 10 chiffres et que le premier chiffre n'est pas un '0'
    alert('Le numéro de téléphone invalide !\nMerci D\'insérer un numéro de téléphone Valide .');
    input.value =''; // Rétablir la dernière valeur valide
  } else {
    // Gérer les erreurs si la longueur n'est pas correcte
    alert('Le numéro de téléphone invalide !\nle numéro de téléphone doit étre sous forme (0123456789).');
    input.value = ''; // Effacer la valeur
  }
}

function formatEmail(input) {
  const email = input.value.trim(); // Supprime les espaces avant et après
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expression régulière simple pour valider l'e-mail

  if (email === '') {
    // Le champ est vide, ne rien faire ou afficher un message d'erreur discret
  } else if (emailRegex.test(email)) {
    input.value = email.toLowerCase(); // Convertir en minuscules si nécessaire
  } else {
    // Gérer les erreurs si l'e-mail n'est pas valide
    alert('L\'adresse e-mail n\'est pas valide.\nl\'email doit étre sous exemple : exemple@email.com');
    input.value="";
    // Vous pouvez laisser la valeur incorrecte pour permettre à l'utilisateur de corriger
  }
}


  function validateMessageSubject(input) {
    const subject = input.value.trim();
    if (subject.length < 5 || subject.length > 20) {
      // Gérer les erreurs si la longueur n'est pas dans la plage spécifiée
      alert('Le sujet du message doit contenir entre 5 et 20 caractères.');
      input.value = ''; // Effacer la valeur
    }
  }
  function limitMessageLength(input) {
    const message = input.value;
    if (message.length > 255) {
      // Tronquer le texte si la longueur dépasse 255 caractères
      input.value = message.substring(0, 255);
      alert('la limite de saisie de message est à 255 caractères.');
    }
  }

   function handleKeyPress(event) {
            if (event.keyCode === 13) {
                // La touche "Entrée" a été pressée
                const messageInput = document.getElementById('message');
                const message = messageInput.value;
                const cursorPosition = messageInput.selectionStart;
                const textBeforeCursor = message.substring(0, cursorPosition);
                const textAfterCursor = message.substring(cursorPosition);
                messageInput.value = textBeforeCursor + "\n" + textAfterCursor;
                event.preventDefault(); // Empêcher le saut de ligne par défaut
            }
        }