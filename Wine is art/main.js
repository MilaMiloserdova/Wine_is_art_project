const popup = document.querySelector(".grey_back");

function openPopup() {
    popup.style.display = "block"
}

popup.addEventListener("click", function(event) {
  popup.style.display = "none";
});