//Global variables
var element;

//Detect onclick event
if (window.matchMedia("(max-width: 920px)").matches === false) {
    $(".ham").on("click", function(){
        $(".side_menu").css("right", "0px");
        $(".overlay").css("opacity","1");
        $(".overlay").css("z-index","99");
    });

    $(".close").on("click", function(){
        $(".contact").css("top") >= "10%" ? $(".contact").hide().css("top","-100%").fadeOut('100') : $(".side_menu").css("right", "-500px");
        $(".overlay").css("opacity","0");
        $(".overlay").css("z-index","-1");
    });

    $(".overlay").on("click", function(){
        $(".contact").css("top") >= "10%" ? $(".contact").hide().css("top","-100%").fadeOut('100') : $(".side_menu").css("right", "-500px");
        $(".overlay").css("opacity","0");
        $(".overlay").css("z-index","-1");
    });
} else {
    $(".ham").on("click", function(){
        $(".side_menu").css("right", "0px");
        $(".overlay").css("opacity","1");
        $(".overlay").css("z-index","9");
    });
    
    $(".close").on("click", function(){
        $(".contact").css("top") >= "10%" ? $(".contact").hide().css("top","-100%").fadeOut('100') : $(".side_menu").css("right", "-120%");
        $(".overlay").css("opacity","0");
        $(".overlay").css("z-index","-1");
    });
    
    $(".overlay").on("click", function(){
        $(".contact").css("top") >= "10%" ? $(".contact").hide().css("top","-100%").fadeOut('100') : $(".side_menu").css("right", "-120%");
        $(".overlay").css("opacity","0");
        $(".overlay").css("z-index","-1");
    });
}


//Scroller Nav
window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("nav").addClass("fixed_nav");
    } else {
        $("nav").removeClass("fixed_nav");
    }
}


//DETECT ESC KEY PRESSED
document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        if ($(".overlay").css("opacity") == "1"){
            $(".contact").css("top") >= "10%" ? $(".contact").hide().css("top","-100%").fadeOut('100') : $(".side_menu").css("right", "-120%");
            $(".overlay").css("opacity","0");
            $(".overlay").css("z-index","-1");
        }
    }
};



//Dropdown
$(".dropdown").click(function(){
    if ($(this).children("aside").is(":hidden")){
        $(this).children("aside").show("slow");
        $(this).children("a").css("color","var(--white)");
    } else {
        $(this).children("aside").hide("slow");
        $(this).children("a").css("color","var(--lite)");
    }
});








//Global variables
var slidestoshow, arrowmark;
if (window.matchMedia("(max-width: 920px)").matches === false) {
    slidestoshow = 4;
    arrowmark = true;
} else {
    slidestoshow = 1;
    arrowmark = false;
}

$('.blog-slider').slick({
    slidesToShow: slidestoshow,
    slidesToScroll: 1,
    dots: false,
    arrows: arrowmark,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true
});


$('.event-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 4000,
	infinite: true
});




// Login-Swap-Control
const container = document.getElementById('container');
const overlayBtn = document.getElementById('overlayBtn');

if (overlayBtn) {
    overlayBtn.addEventListener('click', () => {
        if (container) {
            container.classList.toggle('right-panel-active');
        }
        overlayBtn.classList.remove('btnScaled');
        window.requestAnimationFrame(() => {
            overlayBtn.classList.add('btnScaled');
        });
    });
}

// Login Form Validation
const signUpForm = document.getElementById("signUpForm");
const emailInput = signUpForm ? signUpForm.querySelector('input[placeholder="Email"]') : null;
const passwordInput = signUpForm ? signUpForm.querySelector('input[placeholder="Password"]') : null;
const togglePassword = document.getElementById("togglePassword");

if (signUpForm && emailInput && passwordInput) {
    signUpForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Validate email and password
        const email = emailInput.value;
        const password = passwordInput.value;

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!validatePassword(password)) {
            alert("Password must be at least 8 characters long and contain at least one letter, one number, and one special character.");
            return;
        }

        // Open OTP modal for verification
        openModal();
        signUpForm.reset();
    });
}

// Email validation function
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// Password validation function
function validatePassword(password) {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
}

// Toggle password visibility
if (togglePassword) {
    togglePassword.addEventListener("change", function() {
        passwordInput.type = togglePassword.checked ? "text" : "password";
    });
}

// OTP Modal Handling
const otpModal = document.getElementById('otpModal');
const otpInput = document.getElementById('otpInput');

if (otpModal) {
    document.body.appendChild(otpModal);

    function openModal() {
        otpModal.style.display = "block";
    }

    function closeModal() {
        otpModal.style.display = "none";
    }

    function verifyOtp() {
        if (otpInput) {
            const otp = otpInput.value;
            if (otp === "123456") {
                alert("Registration confirmed!");
                closeModal();
                otpInput.value = ""; // Clear input after successful verification
            } else {
                alert("Invalid OTP. Please try again.");
                otpInput.value = ""; // Clear input on failure
            }
        }
    }
}
//

    document.addEventListener('DOMContentLoaded', function() {
        const signInForm = document.getElementById('signInForm');
        if (signInForm) {
            signInForm.addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent default form submission

                // Get the email input value
                const emailInput = document.getElementById('emailInput');
                if (emailInput) {
                    const email = emailInput.value;

                    if (email) {
                        // Save the email to localStorage
                        localStorage.setItem('userEmail', email);

                        // Redirect to the profile page
                        window.location.href = 'profile/profile.html';
                    } else {
                        alert('Please enter a valid email.');
                    }
                } else {
                    console.error('Email input element not found.');
                }
            });
        } else {
            console.error('Sign-in form element not found.');
        }
    });


//logout button Function

function logout() {
    // Handle logout functionality here (e.g., clear session, redirect to login page)
    alert("Logging out...");
    window.location.href = "/index.html"; 
}


