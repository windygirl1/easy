import bridge from '@vkontakte/vk-bridge';

bridge.send("VKWebAppInit", {});

var cover = document.querySelector('.cover')

var start = document.querySelector('.start')

var compilation = document.querySelector('.compilation')

var contents = document.querySelector('.contents')

var chordsA = document.querySelector('.chordsa')

var chordsC = document.querySelector('chordsc')

var chords = document.querySelector('.chords')

var load = document.querySelector('.load')

start.addEventListener('click', () => {
    cover.classList.add('hide')
    compilation.classList.remove('hide')
    contents.classList.remove('hide')
    chords.classList.remove('hide')
})

$('.compilation span').click(
  function() {
    var mySlider = $(this).data("slider");
    $('.slider').not('.' + mySlider).removeClass('show');
    $('.' + mySlider).addClass('show');
    $(".compilation .active,.chords .active").removeClass("active");
    $(".chords .child:eq(" + $(this).addClass("active").index() + ")").addClass('active')
});

$(".chords .child:eq(" + $(".compilation .active").index() + ")").addClass('active')

  



