
const sidebar = document.querySelector('.menu_icon');

function showSidebar(){
      sidebar.style.display = 'flex'
}
function close_sidebar(){
      sidebar.style.display = 'none'
}

const spans = document.querySelectorAll('.progress-bar span');
spans.forEach((span)=>{
      span.style.width = span.dataset.width;
      span.innerHTML = span.dataset.width;
})

// Crousel Project
let slideIndex = 1;
function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("allSlides");

      if (n > slides.length) {
        slideIndex = 1;
      }
      if(n<1){
            slideIndex = slides.length;
      }

      for(i =0; i<slides.length; i++){
            slides[i].style.display = "none";
      }

      for(i =0; i<slides.length; i++){
            slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "block";
};

showSlides(slideIndex);

function changeSlides(n){
      showSlides(slideIndex += n)
};

function currentSlide(n){
      showSlides(slideIndex = n);
};


// input form
function sendEmail(){
      let name = document.getElementById("name").valye;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;
      let body = "Name: " + name + "<br/> Email:" + email + "<br/> Message: " + message;

      Email.send({
            Host : "smtp.elasticemail.com",
            Username : "svikrmsingh95@gmail.com",
            Password : "C017F04B1972E59CA2387F64FCB3EBF98AF0",
            To : 'srvikramsingh1@gmail.com',
            From : email,
            Subject : "Job Message",
            Body : "and this is body"

        }).then(
          message => alert("Message Sent Succesfully")
        );
}