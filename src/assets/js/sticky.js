import $ from 'jquery'

window.onscroll = function () { myFunction() };
var navbar = document.getElementById("nav-bar");
let h1 = document.getElementById("clinic").offsetTop;
let h2 = document.getElementById("staff").offsetTop;
let h3 = document.getElementById("resourses").offsetTop;
let h4 = document.getElementById("Alert").offsetTop;
let h5 = document.getElementById("Contacs").offsetTop;

function myFunction() {
  if (window.pageYOffset >= 250) {
    navbar.classList.add("sticky")
    navbar.style.position = "fixed";
    navbar.style.top = "0";
  } else {
    navbar.classList.remove("sticky");
    navbar.style.top = "-50px";
    navbar.style.position = null;
  }



  let x = window.pageYOffset > h5 - 300 ? 6
    : window.pageYOffset > h4 - 300 ? 5
      : window.pageYOffset > h3 - 300 ? 4
        : window.pageYOffset > h2 - 300 ? 3
          : window.pageYOffset > h1 -300 ? 2
            : 1;
  let navitem = document.querySelectorAll('.nav-item a')
  navitem.forEach(function (x) {
    x.classList.remove("nav-active");
  })
  navitem = document.querySelector(`.nav-item:nth-child(${x}) > a`).classList.add("nav-active")
}
// SMOOTH SCROLLING PLUS OFFSET FOR FIXED NAV

$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.on('click', function(event) {   

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        // - 70 is the offset/top margin
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 100
        }, 800, function() {

            // Add hash (#) to URL when done scrolling (default click behavior), without jumping to hash
            if (history.pushState) {
                history.pushState(null, null, hash); 
            } else {
                window.location.hash = hash;
            } 
        });
        return false;    
    } // End if
});

