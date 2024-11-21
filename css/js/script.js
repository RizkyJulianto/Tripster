// Show Navigation Bar in Mobile
const navBarList = document.getElementById("navigation-list");
function showMenu() {
    navBarList.style.right = '0';
}

function closeMenu() {
    navBarList.style.right = '-210px';
}

// Add Background at navbar when window scroll 
window.addEventListener('scroll' ,function() {
    const ScrollY = window.pageYOffset;
    const navBar = document.getElementById('navBar');
    if(ScrollY > 5) {
        navBar.style.backgroundColor = '#041126';
    } else {
        navBar.style.backgroundColor = 'transparent';
    }
})



