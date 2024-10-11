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
    const logo = document.querySelector('.logo a');
    const navList = document.querySelectorAll('.navigation-list ul li a')
    if(ScrollY > 5) {
        navBar.style.backdropFilter = 'blur(5px)';
        navBar.style.boxShadow = '0 4px 6px 0 rgba(0,0,0,0.7)';
        logo.style.color = '#ef4444';
        navList.forEach(item => {
            item.style.color = "#041126";
        })
    } else {
        navBar.style.backdropFilter = 'blur(0)';
        navBar.style.boxShadow = 'none';
        logo.style.color = '#ffffff';
        navList.forEach(item => {
            item.style.color = "#ffffffb3";
        })
    }
})