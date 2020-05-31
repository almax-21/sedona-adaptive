var form = document.querySelector(".feedback-form");
var formButton = form.querySelector(".feedback-form__button");
var sentPopup = document.querySelector(".modal--sent");
var errorPopup = document.querySelector(".modal--error");
var popupCloseButton = document.querySelectorAll(".modal__button-close");
var modalBackground = document.querySelector(".modal-background");

var firstName = form.querySelector("[name=first-name]");
var lastName = form.querySelector("[name=last-name]");
var patronymic = form.querySelector("[name=patronymic]");
var phone = form.querySelector("[name=phone-number]");
var email = form.querySelector("[name=email]");
var message = form.querySelector("[name=message]");

var isStorageSupport = true;
var firstNameStorage = "";
var lastNameStorage = "";
var patronymicStorage = "";
var phoneStorage = "";
var emailStorage = "";

try {
  firstNameStorage = localStorage.getItem("firstName");
  lastNameStorage = localStorage.getItem("lastName");
  patronymicStorage = localStorage.getItem("patronymic");
  phoneStorage = localStorage.getItem("phone");
  emailStorage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

firstName.focus();
if (firstNameStorage) {
  firstName.value = firstNameStorage;
  lastName.focus();
}
if (lastNameStorage) {
  lastName.value = lastNameStorage;
  patronymic.focus();
}
if (patronymicStorage) {
  patronymic.value = patronymicStorage;
  phone.focus();
}
if (phoneStorage) {
  phone.value = phoneStorage;
  email.focus();
}
if (emailStorage) {
  email.value = emailStorage;
  message.focus();
}

formButton.addEventListener("click", function (evt) {
  errorPopup.classList.add("modal--show");
  modalBackground.classList.add("modal-background--reveal");
  if (!firstName.value || !lastName.value || !phone.value || !email.value || !message.value) {
    form.classList.add("feedback-form--required");
  }
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  errorPopup.classList.remove("modal--show");
  form.classList.remove("feedback-form--required");
  sentPopup.classList.add("modal--show");
  if (isStorageSupport) {
    localStorage.setItem("firstName", firstName.value);
    localStorage.setItem("lastName", lastName.value);
    localStorage.setItem("patronymic", patronymic.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("email", email.value);
  }
});

for (var i = 0; i < popupCloseButton.length; i++) {
  popupCloseButton[i].addEventListener("click", function (evt) {
    if (errorPopup.classList.contains("modal--show")) {
      errorPopup.classList.remove("modal--show");
    }
    if (sentPopup.classList.contains("modal--show")) {
        sentPopup.classList.remove("modal--show");
      }
      modalBackground.classList.remove("modal-background--reveal");
  });
}

modalBackground.addEventListener("click", function (evt) {
  if (errorPopup.classList.contains("modal--show")) {
    errorPopup.classList.remove("modal--show");
  }
  if (sentPopup.classList.contains("modal--show")) {
      sentPopup.classList.remove("modal--show");
    }
    modalBackground.classList.remove("modal-background--reveal");
});

window.addEventListener("keydown", function (evt) {
  if (errorPopup.classList.contains("modal--show")) {
    errorPopup.classList.remove("modal--show");
  }
  if (sentPopup.classList.contains("modal--show")) {
      sentPopup.classList.remove("modal--show");
    }
  modalBackground.classList.remove("modal-background--reveal");
});
