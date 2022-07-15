"use strict"

function buscarCep(cep) {
    return fetch(`https://viacep.com.br/ws/${cep}/json/`);
}

async function executar() {
    let cep = document.querySelector("#cep").value;
    let logradouro = document.querySelector("#logradouro");
    let complemento = document.querySelector("#complemento");
    let bairro = document.querySelector("#bairro");

    try {
        let cache = sessionStorage.getItem('cep');
        if (!cache || cache !== cep) {
            sessionStorage.setItem('cep', cep);
            const resposta =  await buscarCep(cep);
            const data  = await resposta.json();
            logradouro.value = data.logradouro;
            complemento.value = data.complemento;
            bairro.value = data.bairro;
        }
    }
    catch (error) {
        console.error('não funcionou');
    }
}

let botao = document.querySelector('.btn');
botao.addEventListener('click', (event) => {
    executar();
    event.preventDefault();
});


// salva dados na memoria do navegador
localStorage.setItem('contador', 0);
let contador = localStorage.getItem('contador');
console.log(contador);


/*
function exec() {
    alert('Eu de novo, hehehehe');
}
setInterval(exec, 3000);
*/

// let formControl = document.querySelectorAll('.form-control');
// for(let i = 0; i < formControl.length; i++) {
//     formControl[i].style.backgroundColor = '';
// }

//console.dir();

