function openMenu(){
const navbar = document.querySelector('.dropdown');
navbar.style.transform ="translateY(0px)"
}


function openMenu() {
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = "translateY(0px)";
}

function closeMenu() {
    const navbar = document.querySelector('.dropdown'); // Target the dropdown menu
    if (navbar) {
        navbar.style.transform = "translateY(-500px)";
    } else {
        console.error('Element with class "dropdown" not found');
    }
}

// Attach event listeners
document.querySelector('.close').addEventListener('click', closeMenu);
document.querySelector('.open').addEventListener('click', openMenu);
