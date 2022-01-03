let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");

let count = 0;

boton.addEventListener("click", (e) => {
  e.preventDefault();
  if (count == 0) {
    enlaces.className = "enlaces dos";
    count = 1;
  } else {
    enlaces.classList.remove("dos");
    enlaces.className = "enlaces uno";
    count = 0;
  }
});
