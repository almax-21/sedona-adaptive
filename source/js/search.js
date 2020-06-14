var reservationButton = document.querySelector(".main-reservation__link");
var searchForm = document.querySelector(".main-reservation__form");
var searchButton = searchForm.querySelector(".search-form__button");
var buttonMinus = searchForm.querySelectorAll(".search-form__button-minus");
var buttonPlus = searchForm.querySelectorAll(".search-form__button-plus");
var amount = searchForm.querySelectorAll(".search-form__input--amount");



reservationButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchForm.classList.toggle("search-form--show");
});



var addMinusClickHandler = function (minus, amount) {
  minus.addEventListener('click', function () {
    if (amount.value > 0) {
      amount.value--;
    }
  });
};

for (var i = 0; i < buttonMinus.length; i++) {
  addMinusClickHandler(buttonMinus[i], amount[i]);
}

var addPlusClickHandler = function (plus, amount) {
  plus.addEventListener('click', function () {
    if (amount.value < 9) {
      amount.value++;
    }
  });
};

for (var i = 0; i < buttonPlus.length; i++) {
  addPlusClickHandler(buttonPlus[i], amount[i]);
}
