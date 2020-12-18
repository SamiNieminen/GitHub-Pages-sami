var getJSON = function(url, callback) {

var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.onload = function() {
var status = xhr.status;
if (status == 200) {
callback(null, xhr.response);
} else {
callback(status);
}
};
xhr.send();
};

getJSON('https://func-weather.azurewebsites.net/api/HttpTriggerCSharp2?code=03Hf14xSawGyeGtfxZTCLJ5mGLx0GGusap2f3zssPqg6n3KriqizHg==&deviceId=1f0038001847393035313138&amount=10', function(err, data){
let taulukko = `<h1>Sääasema</h1><table width="100%" style="border=1px solid black">`;
taulukko = taulukko + `<tr><td><b>Ilmankosteus</b></td>`; 
taulukko = taulukko + `<td><b>Lämpötila</b></td>`; 
taulukko = taulukko + `<td><b>Tiivistymispiste</b></td>`; 
taulukko = taulukko + `<td><b>Lämpötila tuntuu</b></td>`; 
taulukko = taulukko + `<td><b>Valoisuus</b></td></tr>`;

console.log(data);
const historia = data.map(function(mittaus){
taulukko = taulukko + `<tr><td>${mittaus.Hum}</td>`; 
taulukko = taulukko + `<td>${mittaus.Temp}</td>`; 
taulukko = taulukko + `<td>${mittaus.DP}</td>`; 
taulukko = taulukko + `<td>${mittaus.HI}</td>`; 
taulukko = taulukko + `<td>${mittaus.Light}</td></tr>`; 
});
taulukko = taulukko + `</table><img src="photon.jpg" width="500">`;
document.body.innerHTML = taulukko;
});