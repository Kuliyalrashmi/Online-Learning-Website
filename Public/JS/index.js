let toggle = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');
//code to change light to dark and dark to light mode
const enableDarkMode = () =>{
   toggle.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}
const disableDarkMode = () =>{
   toggle.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode =='enabled'){
   enableDarkMode();
}

toggle.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode == 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

// code to toggle header
let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}
//code to toggle navbar
let navbar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   body.classList.toggle('active');
}
window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      navbar.classList.remove('active');
      body.classList.remove('active');
   }
}
//code for swiper class 
var swiper = new Swiper(".home-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    loop:true,
    grabCursor:true,
});
var swiper = new Swiper(".home-courses-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
   loop:true,
   grabCursor:true,
   spaceBetween:20,
   breakpoints:{
    0:{
        slidesPerView: 1,
    },
    768:{
        slidesPerView: 2,
    },
    991:{
        slidesPerView: 3,
    },
   },
});
var swiper = new Swiper(".teachers-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
   loop:true,
   grabCursor:true,
   spaceBetween:20,
   breakpoints:{
    0:{
        slidesPerView: 1,
    },
    768:{
        slidesPerView: 2,
    },
    991:{
        slidesPerView: 3,
    },
   },
});
var swiper = new Swiper(".reviews-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
   loop:true,
   grabCursor:true,
   spaceBetween:20,
   breakpoints:{
    0:{
        slidesPerView: 1,
    },
    768:{
        slidesPerView: 2,
    },
    991:{
        slidesPerView: 3,
    },
   },
});
var swiper = new Swiper(".logo-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
});
let a = document.querySelectorAll('.faq .accordion-container .accordion');

a.forEach(acco =>{
  acco.onclick = () =>{
    a.forEach(dion => dion.classList.remove('active'));
    acco.classList.toggle('active');
  };
});

const container = document.querySelector(".container"),
      pw = document.querySelectorAll(".showHidePw"),
      p = document.querySelectorAll(".password");

    // //   js code to show/hide password and change icon
    pw.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            p.forEach(p =>{
                if(p.type =="password"){
                    p.type = "text";

                    pw.forEach(icon =>{
                        icon.classList.replace("fa-eye-slash", "fa-eye");
                    })
                }else{
                    p.type = "password";

                    pw.forEach(icon =>{
                        icon.classList.replace("fa-eye", "fa-eye-slash");
                    })
                }
            }) 
        })
    })