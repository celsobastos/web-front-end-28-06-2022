"use strict"

function buscarCep(cep) {
    let dados = fetch(`https://viacep.com.br/ws/${cep}/json/`);
    return dados;
}

async function executeAll() {
    try {
        const resposta =  await buscarCep('01312-001');
        const data = await resposta.json();
        console.log(data);
    }
    catch (error) {
        console.error('não funcionou')
    }
}

executeAll();


// let formControl = document.querySelectorAll('.form-control');
// for(let i = 0; i < formControl.length; i++) {
//     formControl[i].style.backgroundColor = '';
// }