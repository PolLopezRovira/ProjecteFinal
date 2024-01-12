window.onload = function () {
    
    let menu = document.getElementById("menuprincipal");
    let obrir = document.getElementById("obrir");
    let tancar = document.getElementById("tancar");
    let pujar = document.getElementById("pujaradalt");

    window.onscroll = function () {
        if (document.documentElement.scrollTop > 130) {
            pujar.style.transform = "scale(1)";
        }
        else {
            pujar.style.transform = "scale(0)";
        }
    }

    window.addEventListener("resize", () => {
        if (screen.width > 1024) {
            menu.classList.add("novisible");
            menu.classList.remove("animate");
            menu.classList.remove("animates");
            if (tancar.classList.contains("novisible")) {
                obrir.classList.remove("novisible");
            }
            else if (obrir.classList.contains("novisible")) {
                tancar.classList.add("novisible");
                obrir.classList.remove("novisible");
            }
        }
    });

    obrir.addEventListener('click', () => {
        if (menu.classList.contains("novisible")) {
            menu.classList.toggle("novisible");
            menu.classList.toggle("animate");
            tancar.classList.toggle("novisible");
            obrir.classList.toggle("novisible");
        }
        else {
            menu.classList.toggle("animates");
            menu.classList.toggle("animate");
            tancar.classList.toggle("novisible");
            obrir.classList.toggle("novisible");
        }
    });

    tancar.addEventListener('click', () => {
        if (menu.classList.contains("novisible")) {
            menu.classList.toggle("animate");
            menu.classList.toggle("animates");
            tancar.classList.toggle("novisible");
            obrir.classList.toggle("novisible");
        }
        else {
            menu.classList.toggle("animate");
            menu.classList.toggle("animates");
            tancar.classList.toggle("novisible");
            obrir.classList.toggle("novisible");
        }
    });

    pujar.addEventListener('click', () => {
        if (document.documentElement.scrollTop > 0) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    });

}
