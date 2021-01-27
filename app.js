(function () {
  var arrows = document.querySelectorAll(".faq-item");

  arrows.forEach((element) => {
    element.addEventListener("click", function () {
      resetFaqItem(element);
      element.classList.toggle("active");
      var answer = element.children[1];
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  function resetFaqItem(currentItem) {
    var allItem = document.querySelectorAll(".faq-item.active");

    allItem.forEach((element) => {
      if (element !== currentItem) element.classList.remove("active");
    });
  }
})();
