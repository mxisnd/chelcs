// Profile Text Anim

const profileElement = document.querySelector("#profile");

function checkProfile() {
  if (isInView1(profileElement)) {
    profileElement.classList.add("profile--visible");
  }
}

// 1. Run immediately on load
checkProfile();

// 2. Run on scroll
document.addEventListener("scroll", checkProfile);

function isInView1 (element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom >= 0 &&
    rect.top < (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Carousel
const myWorksSlide = document.querySelector('.aboutme-slide');
const myWorksImages = document.querySelectorAll('.slide');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 1;
const size = myWorksImages[0].clientWidth;

myWorksSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

// Button Listeners
nextBtn.addEventListener('click',()=>{
    if(counter >= myWorksImages.length -1) return;
    myWorksSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    myWorksSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    if(counter <= 0) return;
    myWorksSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    myWorksSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

myWorksSlide.addEventListener('transitionend', ()=>{
    if (myWorksImages[counter].id === 'last-clone'){
        myWorksSlide.style.transition = "none";
        counter = myWorksImages.length -2;
        myWorksSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
    if (myWorksImages[counter].id === 'first-clone'){
        myWorksSlide.style.transition = "none";
        counter = myWorksImages.length - counter;
        myWorksSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
});

function autoScroll() {
    if(counter >= myWorksImages.length - 1) return;
    myWorksSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    myWorksSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

let scrollTimer = setInterval(autoScroll, 8000);

myWorksSlide.addEventListener('mouseenter', () => {
    clearInterval(scrollTimer);
});

myWorksSlide.addEventListener('mouseleave', () => {
    scrollTimer = setInterval(autoScroll, 8000);
});

// Copy Text (Discord ID)
function copyTextDisc(event) {
    event.preventDefault();
    const link = document.getElementById("discordLink");
    const text = document.getElementById("textToCopyDisc").innerText;

    navigator.clipboard.writeText(text).then(() => {
        link.innerText = "Copied!";
        
        setTimeout(() => {
            link.innerText = "Discord";
        }, 2000);
    });
}

// Copy Text (Tele Handle)
function copyTextTele(event) {
    event.preventDefault();
    const link = document.getElementById("teleLink");
    const text = document.getElementById("textToCopyTele").innerText;

    navigator.clipboard.writeText(text).then(() => {
        link.innerText = "Copied!";
        
        setTimeout(() => {
            link.innerText = "Telegram";
        }, 2000);
    });
}

// Copy Text (Email)
function copyTextEmail(event) {
    event.preventDefault();
    const link = document.getElementById("emailLink");
    const text = document.getElementById("textToCopyEmail").innerText;

    navigator.clipboard.writeText(text).then(() => {
        link.innerText = "Copied!";
        
        setTimeout(() => {
            link.innerText = "Email";
        }, 2000);
    });
}