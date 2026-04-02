$(document).ready(function() {
    var result = $('#resultado-soma');

    
    $('#calcular').click(function() {
        let num1 = parseFloat($('#num1').val());
        let num2 = parseFloat($('#num2').val());
        const sum = somar(num1, num2);
        result.text("Resultado: " + sum);
    });

    $('.carousel').slick({
        slidesToShow: 3,           // mostra 3 imagens por vez
        slidesToScroll: 1,         // rola 1 imagem por vez
        autoplay: true,            // rotação automática
        autoplaySpeed: 2500,       // tempo entre slides (ms)
        infinite: true,            // volta ao início
        arrows: true,              // mostra setas laterais
        dots: true,                // mostra bolinhas de navegação
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1 }
            }
        ]
    });
});
