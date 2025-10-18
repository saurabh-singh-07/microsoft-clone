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