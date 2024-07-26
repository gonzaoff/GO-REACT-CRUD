/*  ---------------------------------------------------
  Template Name: Gym
  Description:  Gym Fitness HTML Template
  Author: Colorlib
  Author URI: https://colorlib.com
  Version: 1.0
  Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Canvas Menu
    $(".canvas-open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".canvas-close, .offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    // Search model
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    //Masonary
    $('.gallery').masonry({
        itemSelector: '.gs-item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Carousel Slider
    --------------------*/
    var hero_s = $(".hs-slider");
    hero_s.owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false
    });

    /*------------------
        Team Slider
    --------------------*/
    $(".ts-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            320: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    });

    /*------------------
        Calculadora IMC
    --------------------*/
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('bmi-form').addEventListener('submit', function(event) {
          event.preventDefault(); // Prevenir el envío del formulario
      
          // Obtener los valores de los campos de entrada
          var height = parseFloat(document.getElementById('height').value) / 100; // Convertir cm a metros
          var weight = parseFloat(document.getElementById('weight').value);
      
          // Verificar que los valores sean números válidos
          if (isNaN(height) || isNaN(weight)) {
            alert('Por favor, ingresa valores válidos para altura y peso.');
            return;
          }
      
          // Calcular el IMC
          var bmi = weight / (height * height);
      
          // Determinar el estado del peso
          var bmiStatus = '';
          if (bmi < 18.5) {
            bmiStatus = 'Peso insuficiente';
          } else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiStatus = 'Saludable';
          } else if (bmi >= 25 && bmi <= 29.9) {
            bmiStatus = 'Sobrepeso';
          } else if (bmi >= 30) {
            bmiStatus = 'Obeso';
          }
      
          // Mostrar el resultado
          document.getElementById('bmi-result').innerText = 'Tu IMC es ' + bmi.toFixed(2) + ' (' + bmiStatus + ')';
        });
    });

    /*------------------
        Blog Section
    --------------------*/
    document.querySelectorAll('.blog-item').forEach(item => {
        item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
        });
        item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
        });
    });

    /*------------------
        Whatsapp Logo
    --------------------*/
    document.addEventListener('DOMContentLoaded', function() {
        var whatsappLink = document.getElementById('whatsappLink');
        whatsappLink.addEventListener('click', function() {
          var link = this;
          link.classList.add('bounce-effect');
          setTimeout(function() {
            link.classList.remove('bounce-effect');
          }, 300); 
        });
    });

    /*------------------
     Payment box
    --------------------*/
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("pay-button").addEventListener("click", function() {
            alert("Redirigiendo a la plataforma de pago segura...");
            // Aca podes añadir la lógica para redirigir a la plataforma de pago real, por ejemplo:
            // window.location.href = "URL_DE_TU_PLATAFORMA_DE_PAGO";
        });
    });

    /*------------------
     Gallery Section
    --------------------*/
  
    document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery .gs-item');

    galleryItems.forEach(item => {
        item.addEventListener('mouseover', () => {
        item.classList.add('hover-effect');
        });

        item.addEventListener('mouseout', () => {
        item.classList.remove('hover-effect');
        });
    });
    });

    /*------------------
        ChooseUs Section
    --------------------*/
    function animateItem(element) {
        element.classList.add('clicked');
        setTimeout(() => {
          element.classList.remove('clicked');
        }, 300); 
    }

    /*------------------
        Hero Section
    --------------------*/
    document.querySelector('.primary-btn').addEventListener('click', function(event) {
        event.preventDefault();
        let button = event.target.closest('.primary-btn');
        let span = button.querySelector('span');
        button.classList.add('clicked');

        button.textContent = 'ᕙ(•̀‸•́‶)ᕗ';
        setTimeout(function() {
            window.location.href = button.getAttribute('href');
        }, 1000);  
    });

    /*------------------
        Image Popup
    --------------------*/
    $('.image-popup').magnificPopup({
        type: 'image'
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        LogoSmall 
    --------------------*/
    document.querySelector('.logo').oncontextmenu = function() {
    return false;
    };
  
    $('.table-controls ul li').on('click', function () {
        var tsfilter = $(this).data('tsfilter');
        $('.table-controls ul li').removeClass('active');
        $(this).addClass('active');

        if (tsfilter == 'all') {
            $('.class-timetable').removeClass('filtering');
            $('.ts-meta').removeClass('show');
        } else {
            $('.class-timetable').addClass('filtering');
        }
        $('.ts-meta').each(function () {
            $(this).removeClass('show');
            if ($(this).data('tsmeta') == tsfilter) {
                $(this).addClass('show');
            }
        });
    });

})(jQuery);