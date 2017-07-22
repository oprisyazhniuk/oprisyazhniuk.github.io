$ (document).ready(function () {
    $('.cover-img').magnificPopup({
        type: 'image',
        zoom: {
            enabled: true,
            duration: 600 // продолжительность анимации. Не меняйте данный параметр также и в CSS
        },
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });
    $ (document).ready(function () {
    jQuery  ('.mock-1').hover(

        function() {
        $(this).find(".cover-item-gallery").fadeIn();
        },
        function() {
            $(this).find(".cover-item-gallery").fadeOut();

        
    });
    });
$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 160,
    horizontalOrder: true,
    gutter: 20
});

    $(document).ready(function(){
        $("#bs-example-navbar-collapse-1").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();

            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),

                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;

            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1000);
        });
    });

$('.skill').slick({
        dots: true,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]


    });
});







