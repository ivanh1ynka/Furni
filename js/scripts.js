AOS.init();

// ********** Burger Mobile Menu **********
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active-burger");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      body.classList.remove("locked");
      burger.classList.remove("active-burger");
    }
  });
  const itemLink = document.querySelectorAll(".menu__item-link");
  itemLink.forEach(function (itemLink) {
    itemLink.addEventListener("click", () => {
      body.classList.remove("locked");
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
    });
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
}
burgerMenu();

// ********** Active Menu **********
function menuActive() {
  function addClassElementEvent(element, className, event) {
    let elements = document.querySelectorAll(element);
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener(event, function (event) {
        [].forEach.call(elements, function (el) {
          el.classList.remove(className);
        });
        this.classList.add(className);
      });
    }
  }
  addClassElementEvent(".menu__item-link", "menu__item-link-active", "click");
}
menuActive();

// ********** Active Button **********
function btnActive() {
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", btnActive);
  function addClassElementEvent(element, className, event) {
    let elements = document.querySelectorAll(element);
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener(event, function (event) {
        [].forEach.call(elements, function (el) {
          el.classList.remove(className);
        });
        this.classList.add(className);
      });
    }
  }
  addClassElementEvent(".hero__btn", "hero__btn-active", "click");
}
btnActive();

const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,  
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});
function send() {
  let inputName = document.querySelector(".footer__contact-name"),
    inputMail = document.querySelector(".footer__contact-mail"),
    btn = document.querySelector(".footer__contact-btn-link");

  btn.addEventListener("click", () => {
    let data = {
      'name': inputName.value,
      'mail': inputMail.value,
    };
    inputName.value = "";
    inputMail.value = "";
    console.log(data);
  });
}
send();

