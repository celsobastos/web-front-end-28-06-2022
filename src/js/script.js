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

// function mensagem(msn, codigo = '') {
//     // let mensagem = msn + ' ' + codigo;
//     let text = `${msn} - ${codigo}`;
//     console.log(text);
// }

// function produto(codigo) {
//     let produto = '';
//     switch (codigo) {
//         case 1: 
//         produto = 'Teclado';
//         break;

//         case 2: 
//         produto = 'Mouse';
//         break;

//         default :
//         produto = '';
//     }
//     return produto;
// }

//let material = produto(1);
//mensagem("Produto selecionado foi: " + material);


// let soma = function (numero) {
//     mensagem(++numero);
// }

// arrow function
// let soma = numero => mensagem(++numero);
// soma(45);


// let imprimir = function (nome, callback) {
//     let call = callback(nome);
//     console.log(call);
// }

// let funcaoCall = nome => {
//     return nome.length;
// }

// // funcaoCall('celso');

// imprimir('Alan de Oliveira', funcaoCall);


// let func = () => {
//     let cor = botao.classList[1];
//     document.body.bgColor = cor;
// }

// let botao = document.querySelector('.select');
// // console.dir(botao);
// botao.addEventListener("mouseover", func);


/* validação e interatividade com formulário */
// let color = document.querySelector('#cor');
// let eventColor = () => {
//     let cor = color.value;
//     let body = document.querySelector('.home-page');
//     body.style.backgroundColor = cor;
// }
// color.addEventListener('input', eventColor);

let applyColor = new ApplyColor('#cor', '.home-page');
applyColor.executeColor();




let botao = document.querySelector('.botao');
botao.addEventListener("click", (event) => {

    let caixa = document.querySelector('#texto');
    if (caixa.value === '') {
        const DIV = document.querySelector('.alvo');
        DIV.innerHTML =  'Caixa vazia';
        DIV.classList.add('error');
        event.preventDefault();
    }
});



// console.dir();

// let Pessoa = {
//     altura: 1.75,
//     nome: 'Pedro',
//     printData : function () {
//         return `${this.nome} ${this.altura}`;
//     },
//     salario : [800, 4000, {salarioLiq: 8000, salarioB: 9000}]
// };

// //Pessoa.nome = 'Carlos';

// let nome = Pessoa.nome;
// let altura = Pessoa.altura;
// let data = Pessoa.printData();
// let ultimoSalario = Pessoa.salario[2];
// let salarioBruto = Pessoa.salario[2].salarioB;




// let Operacao = function (nome, valor) {
//     this.nome = nome;
//     this.valor = valor;

//     this.pegarValor = function () {
//         return this.valor + this.nome ;
//     };
// } 

// let operacao1 = new Operacao('Celso', 5000);
// console.log(operacao1.pegarValor());

// let operacao2 = new Operacao('Pedro', 10000);
// console.log(operacao2.pegarValor());
