// getting all the elements from the html 

const hamburger = document.querySelector('.hamburger_image');
const navMenu = document.querySelector('.nav__menu');
const navBar = document.querySelector('.nav__bar');
const carousel = document.querySelector('.carousel');

// Adding an event listener on the hamburger image. If it is clicked, then it will check 
    // if the image is the menu image. 
        // if so then set classes to active and change the image to the close image
    // if the image is the close image 
        // then set it back to the hamburger image and toggle off all the active classes. 

hamburger.addEventListener('click', () => {
    if (hamburger.getAttribute('src').includes('menu.svg')) {
        hamburger.setAttribute('src', 'Images/close.svg')
        navMenu.classList.toggle('active');
        navBar.classList.toggle('active');
        carousel.style.zIndex = -1;
        
    } else {
        hamburger.setAttribute('src', 'Images/menu.svg');
        navMenu.classList.toggle('active');
        navBar.classList.toggle('active');
        carousel.style.zIndex = 1;
    }
});

// if you click on a navigation element it would close the menu and remove all the toggled active tags, and then return back to the menu image.
document.querySelectorAll('.nav__item').forEach(n => {
    n.addEventListener('click', () => {
        hamburger.setAttribute('src', 'Images/menu.svg');
        navMenu.classList.remove('active');
        navBar.classList.remove('active');
        carousel.style.zIndex = 1;
    })
});



