const modalForm = document.querySelector('form');
const modalContainer = document.querySelector('.modalContainer');
const header = document.querySelector('header');



modalForm.addEventListener('submit', function(e) {
    e.preventDefault();
    modalContainer.style.display = "none";
    header.style.opacity = "1";
    const userName = document.getElementById('modalName').value
    console.log(userName);}
    
);

window.onclick = function(e) {
      if (e.target.className!== "modalInput") {
      console.log(e.target.className)
      modalContainer.style.display = "none";
      header.style.opacity = "1";
    }
};
