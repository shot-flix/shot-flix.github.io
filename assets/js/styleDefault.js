const buscar = document.getElementById('buscar')
const iconBuscar = document.getElementById('iconBuscar')
const form = document.getElementById('form')
const iconMenu = document.getElementById('iconMenu')
const removeMenu = document.getElementById('removeMenu')
const nav = document.getElementById('nav')
const inputBuscar = document.getElementById('buscar')
const header = document.querySelector('header')
const ulHeader = document.getElementById('ul-header')
const post = document.querySelectorAll('#post')

var slide = document.getElementById('slide-container');
var ultimosFilmes = document.getElementById('ultimosFilmes');
var link = document.getElementById('link-post')
var filmesRecomendados = document.getElementById('scroll-recomendados')


var time;



$('body').animate({
    opacity: 1
}, 1000)

if (ultimosFilmes) {
    ultimosFilmes.scrollLeft = (ultimosFilmes.scrollWidth - ultimosFilmes.clientWidth)
    animacaoRolagem(ultimosFilmes, 1500)
}

if (slide) {
    slide.scrollLeft = (slide.scrollWidth - slide.clientWidth) / 2;
    tradeSlideAuto(slide, 500)
}


if (form) {
    form.addEventListener('mouseenter', () => {
        (function LimparTimeOut() {
            clearTimeout(time);
        })();
    })

    form.addEventListener('click', () => {

        if (window.innerWidth < 855) {
            (function aumentarTamanho(){
                buscar.style.height = '40px'
                buscar.style.width = '100%'
                form.style.width = '100%'
            })();
        } else {
            (function aumentarTamanho(){
                buscar.style.height = '40px'
                buscar.style.width = '250px'
            })();
        }
    
        (function esconderIcon(){
            iconBuscar.style.display = 'none'
        })();
    })

    form.addEventListener('mouseleave', () => {
        time = setTimeout(() => {
            (function diminuirTamanho(){
                buscar.style.height = '0px'
                buscar.style.width = '0px'
            })();
        
            (function mostrarIcon(){
                iconBuscar.style.display = 'block'
            })();
        }, 5000);
    })
}






if (iconMenu) {
    iconMenu.addEventListener('click', () => {
        (function mostrarNav() {
            $(ulHeader).fadeIn(700, 'swing')
            $(form).fadeIn(700, 'swing').css('display','flex')
        })();

        (function removeIconMenu() {
            iconMenu.style.display = 'none'
        })();

        (function mostrarIconRemoveMenu() {
            removeMenu.style.display = 'block'
        })();
    })
}

if (removeMenu) {
    removeMenu.addEventListener('click', () => {
        (function mostrarIconMenu() {
            removeMenu.style.display = 'none'
            iconMenu.style.display = 'block'
        })();
    
        (function removerNavMobile() {
            ulHeader.style.display = 'none'
            form.style.display = 'none'
        })();
    })
}


if (iconBuscar) {
    iconBuscar.addEventListener('click', () => {
        inputBuscar.focus()
        if (window.innerWidth < 855 && inputBuscar.focus) {
            inputBuscar.style.margin = '10px 5px'
        }
    });
}


/********************************* */
    

    //Animação Slide//


function animateSlide(element, position, time) {
    $(element).stop();
    $(element).animate({
        scrollLeft: position
    }, time)
    //console.log({scroll: element.scrollLeft, width: element.clientWidth})
}

function animacaoRolagem(element, time) {
    animateSlide(element, 0, time)
}

function tradeSlide( element, skipOption, sizeSkip) {
    let tamanhoTotal = (element.scrollWidth - element.clientWidth)
    let sizeTrade = tamanhoTotal / sizeSkip

    if (skipOption == 'anterior') {
        //console.log('anterior acionado')
        if (element.scrollLeft > 0) {
            animateSlide(element, element.scrollLeft - sizeTrade, 500)
        }
    } else if (skipOption == 'proximo') {
        //console.log('proximo acionado')
        if (element.scrollLeft < tamanhoTotal) {
            animateSlide(element, element.scrollLeft + sizeTrade, 500)
        }
    }
}

function tradeSlideAuto(element, tempAnimation) {
    let tamanhoTotal = (element.scrollWidth - element.clientWidth)
    let centerScroll = tamanhoTotal / 2
    let timeSkip;

    function setIntervalo() {
        let slideAtual = 3;
        setTimeout(function() {
            timeSkip = setInterval(() => {
                if (slideAtual == 1) {
                    slideAtual = 2
                    animateSlide(element, 0, tempAnimation)
                    //console.log('slide 1')
                } else if (slideAtual == 2) {
                    slideAtual = 3
                    animateSlide(element, centerScroll, tempAnimation)
                    //console.log('slide 2')
                } else {
                    slideAtual = 1
                    animateSlide(element, tamanhoTotal, tempAnimation)
                    //console.log('slide 3')
                }
            }, 3000)
        },1000)
    }

    window.addEventListener('focus', () => {
        clearInterval(timeSkip)
        setIntervalo()
    })
    window.addEventListener('blur', () => {
        clearInterval(timeSkip)
    })

    setIntervalo();
}

//Fim Animação Slide//


//carregar imagens assicronas//



$(window).on('load',function() {
    $('.img-poster').each(function(){
             var src = $(this).attr('data-Src');
             var alt = 'Essa imagem mostra a capa do filme '+$(this).attr('data-Alt');
             $(this).after('<img src="'+src+'" alt="'+alt+'" />');
             $(this).remove();
    })
    
    $('.slider').each(function() {
        var style = $(this).attr('data-url')
        $(this).removeAttr('data-url')
        $(this).attr('style', style)
        //console.log(style)
    })
});


//button top//

function scrollTopo() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000)
}


/******************************** */