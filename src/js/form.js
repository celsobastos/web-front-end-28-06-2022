"use strict"


function buscarCep(cep) {
    return fetch(`https://viacep.com.br/ws/${cep}/json/`);
}

async function execute(cep) {
    try {
        const resposta =  await buscarCep(cep);
        const data  = await resposta.json();
        return data;

    }
    catch (error) {
        console.dir(error);
    }
}

function fillData(data) {
    Object.entries(data).forEach(([key, content]) => {
        let obj = document.querySelector('#' + key) ?? false;  
        if (obj) {
            obj.value = content;
        }
    });
}

let botao = document.querySelector('.btn');
botao.addEventListener('click', (event) => {
    let cep = document.querySelector("#cep").value;
    let cache = sessionStorage.getItem('cep');
    
    if (!cache || JSON.parse(cache).cep !== cep) {
        execute(cep).then(function (data) { 
            console.log('Entrou')
            sessionStorage.setItem('cep', JSON.stringify(data));
            fillData(data);
            
        });
    } else {
        console.log('Cache')
        fillData(JSON.parse(cache));
    }
    event.preventDefault();
});


// salva dados na memoria do navegador
// localStorage.setItem('contador', 0);
// let contador = localStorage.getItem('contador');
// console.log(contador);


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

