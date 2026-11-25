
/*  
let lastScroll = 0;
let hovering = false;
let hideTimer = null;
const cap = document.getElementById("cap");
const zone = document.getElementById("cap-zone");
function showCap() {
    clearTimeout(hideTimer);
    hovering = true;
    cap.classList.remove("hidden");
}
function leaveCap() {
    hovering = false;
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
        if (!hovering && window.scrollY > 100) {
            cap.classList.add("hidden");
        }
    }, 50);
}
zone.addEventListener("mouseenter", showCap);
cap.addEventListener("mouseenter", showCap);
zone.addEventListener("mouseleave", leaveCap);
cap.addEventListener("mouseleave", leaveCap);
window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;
    if (!hovering) {
        if (currentScroll > lastScroll && currentScroll > 100) {
            cap.classList.add("hidden");
        } else if (lastScroll - currentScroll > 5) {
            cap.classList.remove("hidden");
        }
    }
    lastScroll = currentScroll;
});
*/

const buton = document.getElementById("theme-toggle");

function aplicaPoza() {
    const poza = document.getElementById("echipa");
    if (!poza) return;

    const dark = document.documentElement.getAttribute("data-theme") === "dark";

    if (dark) {
        poza.src = "Poze/BeiusAlbastru.jpeg";
        poza.classList.remove("img-first");
        poza.classList.add("img-second");
    } else {
        poza.src = "Poze/beiuscs.jpg";
        poza.classList.remove("img-second");
        poza.classList.add("img-first");
    }
}

if (localStorage.getItem("tema") === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
} else {
    document.documentElement.removeAttribute("data-theme");
}
aplicaPoza();


if (buton) {
    buton.addEventListener("click", () => {
        const dark = document.documentElement.getAttribute("data-theme") === "dark";

        if (dark) {
            document.documentElement.removeAttribute("data-theme");
            localStorage.setItem("tema", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("tema", "dark");
        }
        aplicaPoza();
    });
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

