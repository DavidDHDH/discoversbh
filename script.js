// Affichage de l'heure

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById("time").innerHTML =
    +h + ":" + m;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
   
startTime();

/*CONTACT ME
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


  message = "Thanks, we will get back to you as soon as possible"
  */




