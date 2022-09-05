// var btn = document.getElementById("btn");
// var nav = document.getElementById("nav");

// btn.onclick = function() {
  
//     if (nav.style.display == 'none') {
//       nav.style.display = 'block';
//     } else {
//       nav.style.display = 'none';
//     }
//   }

// Navbar disappear on scroll

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navigation-bar").style.top = "0";
  } else {
    document.getElementById("navigation-bar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

// Page scroll animation
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

function scrollReveal() {
	var revealPoint = 150;
	var revealElement = document.querySelectorAll(".demo");
	for (var i = 0; i < revealElement.length; i++) {
		var windowHeight = window.innerHeight;
		var revealTop = revealElement[i].getBoundingClientRect().top;
		if (revealTop < windowHeight - revealPoint) {
			revealElement[i].classList.add("active");
		} else {
			revealElement[i].classList.remove("active");
		}
	}
}

window.addEventListener("scroll", scrollReveal);
scrollReveal();


// Mobile Navbar Collapse On Click

