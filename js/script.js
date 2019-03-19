var link = document.querySelector(".main-map-button");
var popup = document.querySelector(".modal-contact-us")
var popup_close = document.querySelector(".button-close")

var form = popup.querySelector("form");
var name_field = popup.querySelector("[name=name]");
var email_field = popup.querySelector("[name=email]");
var text_field = popup.querySelector("[name=letter-text]");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");

    if (storage) {
      email_field.value = storage;
    }

	name_field.focus();
});

popup_close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
	evt.preventDefault();
	if (!name_field.value || !email_field.value || !text_fiel.value) {
	evt.preventDefault();
	popup.classList.remove("modal-error");
	popup.offsetWidth = popup.offsetWidth;
	popup.classList.add("modal-error");
	console.log("Нужно ввести имя, email и текст");
    } 
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  evt.preventDefault();
  if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  }
}
});