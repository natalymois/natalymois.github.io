/*---Вторая часть портфолио (раскрывается при клике)----*/

var openBlock = document.getElementById ('js_open-second-block');
var secondBlock = document.getElementsByClassName('ajax-wrap_second-block')[0];
var contactsForm = document.getElementsByClassName('contacts-form__second-block')[0];

   openBlock.onclick = function() {
		this.style.opacity = "0";
		this.style.display = "none";
		secondBlock.classList.add('open');		
   }