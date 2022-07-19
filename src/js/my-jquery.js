$(function(){

    let cep = $('#cep');
    cep.on('keyup', function () {
        const cepVal = $(this).val();
        if(cepVal.length === 9) {
            $.get(`https://viacep.com.br/ws/${cepVal}/json/`, 
            function(data, status){
                $('#logradouro').val(data.logradouro);
                $('#complemento').val(data.complemento);
                $('#bairro').val(data.bairro);
            });
        }
    });

    $('#cep').mask('00000-000');

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