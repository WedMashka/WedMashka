"use strict";

const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows()
      );
   }
};

if (isMobile.any()) {
   document.body.classList.add('_touch');
   let menuArrows = document.querySelectorAll('.menu__arrow');
   if (menuArrows.length > 0) {
      for (let index = 0; index < menuArrows.length; index++) {
         const menuArrow = menuArrows[index];
         menuArrow.addEventListener("click", function (e) {
            menuArrow.parentElement.classList.toggle('_active');
         });
         }
      }
} else {
   document.body.classList.add('_pc');
}

const iconMenu = document.querySelector('.menu__icon');

const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock')
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach((menuLink) => {
      menuLink.addEventListener('click', onMenuLinkClick);
   });
   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (
         menuLink.dataset.goto &&
         document.querySelector(menuLink.dataset.goto)
      ) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue =
            gotoBlock.getBoundingClientRect().top +
            pageYOffset -
            document.querySelector('.header').offsetHeight;
         if (iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
            if (
               menuBody.dataset.sub_menu_auto_close &&
               document.body.classList.contains('_touch')
            ) {
               let menuArrows = document.querySelectorAll('.menu__arrow');
               for (let index = 0; index < menuArrows.length; index++) {
                  menuArrows[index].parentElement.classList.remove('_active');
               }
            }
         }
         window.scrollTo({
            top: gotoBlockValue,
            behavior: 'smooth',
         });
         e.preventDefault();
      }
   }
}





const subMenuLinks = document.querySelectorAll('.menu__sub-link[data-goto]');
if (subMenuLinks.length > 0) {
   subMenuLinks.forEach((menuLink) => {
      menuLink.addEventListener('click', onMenuLinkClick);
   });
   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (
         menuLink.dataset.goto &&
         document.querySelector(menuLink.dataset.goto)
      ) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue =
            gotoBlock.getBoundingClientRect().top +
            pageYOffset -
            document.querySelector('.header').offsetHeight;
         if (iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
            if (
               menuBody.dataset.sub_menu_auto_close &&
               document.body.classList.contains('_touch')
            ) {
               let menuArrows = document.querySelectorAll('.menu__arrow');
               for (let index = 0; index < menuArrows.length; index++) {
                  menuArrows[index].parentElement.classList.remove('_active');
               }
            }
         }
         window.scrollTo({
            top: gotoBlockValue,
            behavior: 'smooth',
         });
         e.preventDefault();
      }
   }
}



const menuContacts = document.querySelector('.menu__contacts');

const menuContactsBody = document.querySelector('.nav__contacts');

if (menuContacts) {
   menuContacts.addEventListener("click", function (e) {
      menuContacts.classList.toggle('_active');
      menuContactsBody.classList.toggle('_active');
   });
}







let ava = document.querySelector('#ava');

function hiddenAva() {
   ava.classList.add('img__ava1');
}



function showAva() {
   ava.classList.remove('img__ava1');
}

function changeAva() {
   document.querySelector('#ava').src = "img/img/colage1.jpg";
}

function remuveAva() {
   document.querySelector('#ava').src = "img/ava3.jpg";
}

let x = 1;
function avaChange() {
   if (x == 1) {
      hiddenAva();
      setTimeout(changeAva, 8000);
      setTimeout(showAva, 8000);
      setTimeout(hiddenAva, 16000);
      setTimeout(remuveAva, 24000);
      setTimeout(showAva, 24000);
   } 
}







let baner = document.getElementById('baner');

function showContetn() {
   let op;
   op = 1;
   var id = setInterval(frame, 20);
   function frame() {
      if (op < 0.001) {
         clearInterval(id);
         baner.remove();
         avaChange();
      } else {
         op = op - 0.01;
         baner.style.opacity = op;
      }
   }
}









