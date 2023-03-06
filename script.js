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

// Bouton menu

var concierge = document.getElementById('btnConcierge')
concierge.addEventListener('onclick', showUp)
console.log(concierge)

function showUp()
{
  const popUp = document.getElementById('popup-menu');
  const attr = document.createAttribute('style');
  attr.value = 'display:block'
  popUp.setAttributeNode(attr);
}


