/*  Скрипт для прокрутки вверх */

	
var scrollingUp;
var timer;
var scroll_to_top = document.querySelector('.upbutton')



document.addEventListener('scroll', function() {
  if (window.pageYOffset >= document.documentElement.clientHeight) {
    scroll_to_top.style.display = "block";

  } else {
    scroll_to_top.style.display = "none";

  }
})

scroll_to_top.addEventListener('click', function() {
  scrollingUp = window.pageYOffset;
  winScrollUp();
})

function winScrollUp() {

  if (scrollingUp > 0) {
    window.scrollTo(0, scrollingUp);
    scrollingUp = scrollingUp - 20;
    timer = setTimeout(winScrollUp, 1)

  } else {
    clearTimeout(timer);
    window.scrollTo(0, 0);
  }
}