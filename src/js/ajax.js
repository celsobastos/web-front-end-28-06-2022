"use strict"

let xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {

    if (this.readyState === 4 && this.status === 200) {
        let resposta = this.responseText;
        console.log(resposta);
    }
}

xmlhttp.open("GET", 'http://127.0.0.1:5501/src/content-ajax/content.txt', true);
xmlhttp.send;
