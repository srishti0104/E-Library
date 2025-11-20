// ===== SELECT ELEMENTS =====
let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.search-form');
let loginBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let closeLogin = document.querySelector('#close-login-btn');
let header2 = document.querySelector('.header .header-2');


// ===== SEARCH BAR TOGGLE (MOBILE) =====
searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active');
});


// ===== LOGIN FORM POPUP =====
loginBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

closeLogin.addEventListener('click', () => {
    loginForm.classList.remove('active');
});


// ===== STICKY NAV ON SCROLL =====
window.addEventListener('scroll', () => {
    searchForm.classList.remove('active');

    if (window.scrollY > 80) {
        header2.classList.add('active');
    } else {
        header2.classList.remove('active');
    }
});


// ===== LOADER =====
function fadeOut() {
    document.querySelector('.loader-container').classList.add('active');
}

window.onload = () => {
    fadeOut();
};


// ===== SWIPER SLIDERS =====

// --- Home Book Slider ---
var swiper1 = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});

// --- Featured Books Slider ---
var swiper2 = new Swiper(".featured-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        450: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 }
    }
});

// --- Reviews Slider ---
var swiper3 = new Swiper(".reviews-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000
    },
    grabCursor: true,
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});

// --- Blogs Slider ---
var swiper4 = new Swiper(".blogs-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000
    },
    grabCursor: true,
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});
