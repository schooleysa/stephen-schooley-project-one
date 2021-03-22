const modalForm = document.querySelector('form');
const modalContainer = document.getElementByClass(".modalContainer");
const header = document.querySelector('header');


modalForm.addEventListener('submit', function(e) {
    e.preventDefault();
}
);

window.onclick = function(e) {
    if (e.target == modalForm) {
      modalContainer.style.display = "none";
      header.opacity= "1";
    }
}
