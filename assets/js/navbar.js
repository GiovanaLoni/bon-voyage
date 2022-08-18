const navbarItems = document.getElementById("menu-items");

function toggleNavbar()
{
    if (navbarItems.style.display == "block") {
        navbarItems.style.display = "none";
    } else {
        navbarItems.style.display = "block";
    }
}

window.addEventListener('resize', event => {
    console.log(window.innerWidth);
    if (window.innerWidth >= 768) {
        navbarItems.style.display = "block";
    }
});
