//Defining the scrolling speed
const scrollSpeed = 2;

//Making an auto scroll function
function autoScroll() {
    //Scrolling down the page using the initial declared scroll speed
    window.scrollBy(0, scrollSpeed);

    //Checking if we've reached the bottom of the page
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        //if we are at to bottom of the page
        window.scrollTo(0, 0);
    }

    //Continue scrolling 
    requestAnimationFrame(autoScroll);
};



//Now starting the scroll when the page loads
window.onload = () => {
    autoScroll();
};