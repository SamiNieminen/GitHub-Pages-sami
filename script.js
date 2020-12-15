const emailnappi = document.querySelector('.lahetanappi`) ;

emailnappi.addEventListener(`click', e=> {
  e.preventDefault();

sendJSON();

});

function sendJSON(){
let xhr = new XMLHttpRequest();
let url = "https://saIpausemaiI.azurewebsites.net/api/HttpTriggerCSharp1?code= IWOELqiUØ7Aqs8viQYzuNIrQP7xoV7W7C5W2ctgjIRc ==";

Xhr .open("POST", url, true);

xhr. setRequestHeader( "Content-Type", "application/json");

Xhr.onreadystatechange = function(){
if(xhr.readyState ===4 && xhr.status == 200){
console.log("valmis, yhteys toimii");
}
};
var data = JSON.stringly({
"Emailmsg" :"Tähän tulee postin sisältö",  //kirjottaa sisällän
"EmailAddress": "mira.vorne@salpaus.fi",   //viestinn kirjottajan email
"EmailTo":"nippis2@luukku.com",   //kenelle tulee viesti eli minä
"EmailName": "Teppo Tyyppi"   //nimi kenttä
});
xhr.send(data);
}