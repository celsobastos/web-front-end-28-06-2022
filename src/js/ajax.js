"use strict"
// function loadXMLDoc() {
//     let xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function () {
//         console.log('test 5');
//         let resposta = this.responseText;
//         if (this.status == 200) {
//             let resposta = this.responseText;
//             console.log(resposta);
//         }
//     }
//     xmlhttp.open("GET", "http://viacep.com.br/ws/01312-001/json/", true);
//     xmlhttp.send;
// }

function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        //console.log(JSON.parse(this.responseText));
      }
    };
    xhttp.open("GET", "http://127.0.0.1:5501/src/content-ajax/content.txt", true);
    xhttp.send();
}
loadXMLDoc();