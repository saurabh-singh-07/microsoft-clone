
const manubar = document.querySelector(".manubar");
const features = document.querySelector(".features");
const manubarclosebtn = document.querySelector(".manubar-closebtn");

manubar.addEventListener("click", ()=>{
    features.style.left = '0';
});

manubarclosebtn.addEventListener("click", ()=>{
    features.style.left ='-250px';
});

const morebtn = document.querySelector(".morebtn");
const morecontainer = document.querySelector(".morecontainer");

morebtn.addEventListener('click', ()=>{
    morecontainer.classList.toggle('md:block');
})

const sliderbox = document.querySelector(".sliderbox");
const slider = document.querySelectorAll(".slider");
const control = document.querySelector(".control");
const NextButton = document.querySelector(".Nextbtn");
const PrevButton = document.querySelector(".Prevbtn");
const pausebtn = document.querySelector(".pausebtn");
let slidesCount = 1;
let slideInterval;
let length = slider.length;
let buttons = [];

//create dots control buttons
for(let i = 0; i < slider.length; i++){
    const div = document.createElement("div");
    div.className = "button";
    control.appendChild(div);
}
buttons = control.querySelectorAll(".button");
function resetbg(){
    buttons.forEach((button)=>{
        button.style.background = "transparent";
    });
}

buttons.forEach((button , i)=>{
    button.addEventListener("click", ()=>{
        resetbg();
        sliderbox.style.transform = `translateX(-${i * 100}%)`;
        slidesCount = i + 1;
        buttons[i].style.background = 'black';
    });
});

function changecolor() {
    resetbg();
    buttons[slidesCount - 1].style.background = "black";
    }
function nextslide(){
    sliderbox.style.transform = `translateX(-${slidesCount * 100}%)`;
    slidesCount++;
}
function prevslide(){
    sliderbox.style.transform = `translateX(-${(slidesCount-2) * 100}%)`;
    slidesCount--;
}
function Firstslide() {
    sliderbox.style.transform = `translateX(0px)`;
    slidesCount = 1;
}
function lastslide(){
    sliderbox.style.transform = `translateX(-${(length - 1) * 100}%)`;
    slidesCount = length;
}

NextButton.addEventListener("click",()=>{
    slidesCount < length ? nextslide() : Firstslide();
    changecolor();
});

PrevButton.addEventListener("click",()=>{
    slidesCount > 1 ? prevslide() : lastslide();
    changecolor();
})

function AutoSlidesShow(){
    slideInterval = setInterval(()=>{
        slidesCount < length ? nextslide() : Firstslide();
        changecolor();
    },4000);
}
let ispaused = false;
const icon = document.querySelector(".ibtn");

function PauseSlides(){
    clearInterval(slideInterval);
    ispaused = true;
    icon.classList.replace("fa-pause", "fa-play");
}


function startSlides(){
    AutoSlidesShow();
    ispaused = false;
    icon.classList.replace("fa-play", "fa-pause");
}
pausebtn.addEventListener("click", ()=>{
    if(ispaused){
        startSlides();
    }else{
        PauseSlides();
    }
})
AutoSlidesShow();