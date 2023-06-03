// Affichage de l'heure
function checkTime(i) {
  if (i < 10) {
    i = `0${i}`;
  } // add zero in front of numbers < 10
  return i;
}

function startTime() {
  const today = new Date();
  const h = today.getHours();
  let m = today.getMinutes();
  // const s = today.getSeconds();
  m = checkTime(m);
  // s = checkTime(s);
  document.getElementById("time").innerHTML = `${h}:${m}`;
  setTimeout(startTime, 500);
}

startTime();

/* CONTACT ME
Envoi un email à moi meme avec adresse email du contact :
- recuperer le champ email
- l'integre dans un email vierge
- envoi email
- efface le champ email
- affiche un message 'merci'

function sendEmail(){
    Email.send({
      Host : "smtp.gmail.com",
      Username : "david.heimfert@gmail.com",
      Password : "WeLove!!97133",
      To : 'david.heimfert@icloud.com',
      From : "david.heimfert@gmail.com",
      Subject : "ceci est l'objet",
      Body : "Et ceci est le message"
  }).then(
    message => alert(message)
  )}

  https://lawaltech.hashnode.dev/comment-envoyer-un-e-mail-en-utilisant-js-sans-backend
  message = "Thanks, we will get back to you as soon as possible"
  */
