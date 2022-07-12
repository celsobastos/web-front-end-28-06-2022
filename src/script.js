"use strict"
// console.log('meu test de log');
// Meu comentário
/*
Meu comentários
em varias linhas
*/
// let idade = 20;
// let salario = 1000.80; // Number
// let nomeCompleto = 'Pedro Alvares'; // String
// let nomecompleto = 'Pedro Alvares Cabral'; // String
// let _nomecompleto = 'Pedro Alvares Cabral'; // String
// let $nomecompleto = 'Pedro Alvares Cabral'; // String

// nomeCompleto = 'Jonas';
// const COLOR_RED = '#ff0000';
// // let $ = 100.45;
// // let _ = 100.45;
// let contrato = false; // false boolean
// let endereco; // undefined

// let salarioLiquido = '2000';

// salarioLiquido = Number(salarioLiquido) + 10;

// console.log(salarioLiquido);
// console.log(Number(contrato));

// let mensagem = 20;
// console.log(Boolean(mensagem));
// console.log(String(mensagem));

// if (!mensagem) {
//     console.log('Hellow world!');
// }

// let Pessoa = {}; // object
// let Carro = {};
// let Pneu = {};
// let doc = document.body.bgColor;

let botao = document.querySelector('.select');
botao.addEventListener("click", () => {
    let cor = botao.classList[1];
    document.body.bgColor = cor;

});