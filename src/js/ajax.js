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
        let data = JSON.parse(this.responseText);
        let n = Math.round(Math.random(0,5) * 5);
        document.querySelector('.lead').innerHTML = data['m'+ n]
      }
    };
    xhttp.open("GET", "content-ajax/content.txt", true);
    xhttp.send();
}

setInterval(loadXMLDoc, 5000);

setInterval(() => { 
    let times = new Date();
    document.querySelector('.data-hora').innerHTML =
    times;
 }, 1000)


// let test = '{"nome": "Maria"}';
// let test2 = JSON.parse(test);
// console.log(test2);
