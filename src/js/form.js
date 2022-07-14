"use strict"

function buscarCep(cep) {
    return fetch(`https://viacep.com.br/ws/${cep}/json/`);
}

async function executar() {
    let cep = document.querySelector("#cep").value;
    let logradouro = document.querySelector("#logradouro");

    try {
        const resposta =  await buscarCep(cep);
        const data  = await resposta.json();
        logradouro.value = data.logradouro;
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




// let formControl = document.querySelectorAll('.form-control');
// for(let i = 0; i < formControl.length; i++) {
//     formControl[i].style.backgroundColor = '';
// }

//console.dir();

