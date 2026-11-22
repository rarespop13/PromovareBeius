let lastScroll = 0;
const cap = document.getElementById("cap");

window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        cap.classList.add("hidden");
    } else if (lastScroll - currentScroll > 5) {
        cap.classList.remove("hidden");
    }
    lastScroll = currentScroll;
});



const buton = document.getElementById("theme-toggle");
const temaSalvata = localStorage.getItem("tema");
if (temaSalvata === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
} else {
    document.documentElement.removeAttribute("data-theme");
}
buton.addEventListener("click", () => {
    const temaCurenta = document.documentElement.getAttribute("data-theme");
    if (temaCurenta === "dark") {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("tema", "light");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("tema", "dark");
    }
});


function schimbaImaginea() {
    const poza = document.getElementById("echipa");

    if (poza.classList.contains("img-first")) {
        poza.src = "Poze/BeiusAlbastru.jpeg";
        poza.classList.remove("img-first");
        poza.classList.add("img-second");
    } else {
        poza.src = "Poze/beiuscs.jpg";
        poza.classList.remove("img-second");
        poza.classList.add("img-first");
    }
}


function mareste(poza) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("pozaMare").src = poza.src;
    document.getElementById("cap").style.display = "none";
}

function inchide() {
    document.getElementById("lightbox").style.display = "none";
    document.getElementById("cap").style.display = "";
}

