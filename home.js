//Opens the "resume" PDF file in a new tab
const resumeCV = document.querySelector(".resume");

resumeCV.addEventListener('click', function () {
    window.open('resume.pdf', '_blank');
})

//When submiting the contact form
const thanks = document.querySelector("#thankyou");
const contactForm = document.querySelector("form");
//const username = document.querySelector("#name");
//const email = document.querySelector("#email");
//const msg = document.querySelector("#msg");
//The "thank you" text will first be hidden
thanks.hidden = true;

//On submitting the form when all field filled properly
contactForm.addEventListener("submit", function (e) {
    //e.preventDefault();
    //Showing the "thank you" text after submitting form
    thanks.hidden = false;

    //Clearing all the form fields
    //username.value = "";
    //email.value = "";
    //msg.value = "";

    //Showing the "thank you" for 3 seconds
    setTimeout(() => {
        thanks.hidden = true;
    }, 4000);
})
