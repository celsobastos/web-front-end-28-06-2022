$(function(){

    let cep = $('#cep');
    cep.on('keyup', function () {
        const cepVal = $(this).val();
        if(cepVal.length === 8) {
            $.get(`https://viacep.com.br/ws/${cepVal}/json/`, 
            function(data, status){
                console.log(data);
            });
        }
    });

    const senha = $('#senha');
    const check = $('#show');
    check.on('click', function () {
        if ($(this).is(':checked')) {
            senha.attr('type','text');
        } else {
            senha.attr('type','password');
        }
    });

    // let cep = $('#cep');
    // let tipo = cep.attr('type');

    // if(tipo == 'text') {
    //     cep.attr('type', 'password');
    // }

    // $('.form-control:even').css('color', '#ff0000');
    // let display = $('.display-4');
    // let button = $('.btn-jquery');
    // let cep = $('#cep');

    // let tipo = cep.attr('type');

    // display.addClass('h1');
    // display.removeClass('display-4');

    // let texto = display.html();

    // if (texto.length <= 10) {
    //     button.html(texto);
    // }

    // $('.btn-jquery').html(texto);

    // document.querySelector('button').innerHTML = 'meu txto'

    //display.hide();
    // display.show();
    // display.toggle();
    //display.fadeIn(3000); // 'slow'

    // button.click(function() {
    //     display.toggle();
    // });

    // button.on('click', function () {
    //     display.css({
    //         color : 'red',
    //         background: 'blue',
    //         width: '50%',
    //     }).fadeIn(3000).slideUp(2000);

});