/*  Скрипт появления блока при прокрутке до него */
/*---Функция прокрутки страницы---*/
window.onscroll = function() {
  var pageY = window.pageYOffset || document.documentElement.scrollTop; // document.documentElement.scrollTop -прокрутка сверху документа html
  /* document.documentElement == html, window.pageYOffset - текущая   прокрутка сверху*/
  
  var innerHeight = document.documentElement.clientHeight; /* видимая часть страницы*/
  var innerTop = document.documentElement.clientTop; /* координата верхнего левого угла экрана (равна нулю) */

  var skillsItem = document.getElementsByClassName('skills-item');
  
  for (let i = 0; i < skillsItem.length; i++) {
	var sBox = skillsItem[i].getBoundingClientRect();
	var sTop = sBox.top;
	var sHeight = sBox.height;
	
	if (sTop <= innerHeight - sHeight/8 && sTop > innerTop - sHeight/8) {
		skillsItem[i].className = "skills-item visible";
	}
	else {
		skillsItem[i].className = "skills-item";
	}
  }
  
  
}  
  