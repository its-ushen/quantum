// how does this code work? 

// gather the hero element 
const hero = document.querySelector('.hero');
console.log(hero);

// add an event listener to the window
window.addEventListener("scroll", () => {
	// create a variable to store the number of pixels scrolled off the top of the page.
	const currentScroll = window.scrollY;
	// if it's greater than zero activate the classes
	if (currentScroll > 0) {
		navBar.classList.add("scroll-down");
		hero.classList.add("scroll-down");
	} 
	// if it's equal to zero then remove the classes.
	else if (currentScroll == 0) {
        navBar.classList.remove("scroll-down");
        hero.classList.remove("scroll-down");
        carousel.style.zIndex = 1;
    }
});
