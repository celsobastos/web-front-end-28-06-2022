$(function(){
    $('.form-control:even').css('color', '#ff0000');
    let display = $('.display-4');
    let button = $('.btn-jquery');


    let texto = display.html();

    if (texto.length <= 10) {
        button.html(texto);
    }


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