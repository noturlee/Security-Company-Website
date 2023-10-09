// JavaScript to toggle dark mode
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});


// Function to trigger the typing animation
function startTypingAnimation() {
  const textElement = document.getElementById('typing-animation');
  const textToType = "We'll quote you right, so you can save big 🌞";
  let charIndex = 0;

  function type() {
      if (charIndex < textToType.length) {
          textElement.textContent += textToType.charAt(charIndex);
          charIndex++;
          setTimeout(type, 160); // Adjust typing speed (milliseconds)
      }
  }

  type();
}

// Call the function to start the typing animation
startTypingAnimation();



// Function to validate the contact form
function validateForm() {
  const name = document.forms["contactForm"]["name"].value;
  const email = document.forms["contactForm"]["email"].value;
  const message = document.forms["contactForm"]["message"].value;

  // Check if any of the fields are empty
  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("All fields must be filled out");
      return false; // Prevent form submission
  }

  // Check if the email is valid using a simple regex pattern
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return false; // Prevent form submission
  }
  
  // If all validations pass, you can submit the form
  return true;
}


document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("nav");
  navbar.classList.add("nav-slide-in");
});



/// Function to handle the intersection
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add the "animate" class when the element is in the viewport
      entry.target.classList.add('animate');
      // Stop observing once the animation is applied
      observer.unobserve(entry.target);
    }
  });
}

// Delay the initialization of the Intersection Observer until after the page has loaded
document.addEventListener('DOMContentLoaded', () => {
  // Create an observer
  const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.3, // 30% of the element is visible
  });

  // Observe elements with the "observe-me" class
  const elementsToAnimate = document.querySelectorAll('.observe-me');
  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
});


// Function to handle the cookies pop-up
function handleCookiesPopUp() {
  // Get a reference to the "Accept" button
  const acceptButton = document.querySelector('.accept-button');
  // Get a reference to the cookies pop-up
  const cookiesPopUp = document.querySelector('.cookies-pop-up');

  // Function to hide the cookies pop-up with slide-out animation
  function hideCookiesPopUp() {
    cookiesPopUp.style.transform = 'translateX(100%)';
    setTimeout(() => {
      cookiesPopUp.style.display = 'none';
    }, 300); // Adjust the animation duration (in milliseconds) as needed
  }

  // Function to show the cookies pop-up with slide-in animation
  function showCookiesPopUp() {
    cookiesPopUp.style.display = 'block';
    cookiesPopUp.style.transform = 'translateX(0)';
  }

  // Call the showCookiesPopUp function to show the cookies pop-up on page load
  showCookiesPopUp();

  // Add a click event listener to the "Accept" button
  acceptButton.addEventListener('click', () => {
    // Hide the cookies pop-up with slide-out animation when the button is clicked
    hideCookiesPopUp();
  });
}

// Call the handleCookiesPopUp function to set up the cookies pop-up functionality
handleCookiesPopUp();


