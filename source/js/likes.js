var likeButtons = document.querySelectorAll(".post__likes-button");
var numberButtons = document.querySelectorAll(".post__likes-number");

var addLikeClickHandler = function (like, number) {
  like.addEventListener('click', function () {
    if (like.classList.contains('post__likes-button--added')) {
      number.textContent--;
    } else {
      number.textContent++;
    }

    like.classList.toggle('post__likes-button--added');
  });
};

for (var i = 0; i < likeButtons.length; i++) {
  addLikeClickHandler(likeButtons[i], numberButtons[i]);
}
