let menuIsOpen = true;
const menuIcon = document.querySelector("#menu-icon");
const menuTexto = document.querySelectorAll(".menu-texto");

menuIcon.addEventListener('click', function () {

    if(menuIsOpen) {
        menuIcon.src = "./assets/imgs/arrow-right.png"
        menuIsOpen = false;
        menuTexto.forEach(m => {
            m.style.display = "none"
        });
    } else {
        menuIcon.src = "./assets/imgs/arrow-left.png"
        menuIsOpen = true;
        menuTexto.forEach(m => {
            m.style.display = "inline"
        });

    }
})

