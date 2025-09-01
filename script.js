const circleImg = document.querySelector(".circle img");
const nameContainer = document.querySelector(".name-container");
const hiddenBackImg = document.querySelector(".hidden-back img");
const experience = document.querySelector(".experience");
const quote = document.querySelector(".quote")
circleImg.addEventListener("mouseenter", () => {
    nameContainer.style.animation = "textOut 0.5s linear forwards";
    experience.style.animation= "textUp 0.5s linear forwards";
    hiddenBackImg.style.animation=" backIn 0.5s linear forwards";
    quote.style.animation= "textUp 0.5s linear forwards";
    setTimeout(() => {
        experience.style.top= "20%";
        quote.style.top= "20%";
        hiddenBackImg.style.display= "flex";
    }, 500);
    
    
    
    
});
circleImg.addEventListener("mouseleave", () => {
    nameContainer.style.animation = "textIn 0.5s linear ";   // restore
    experience.style.animation= "textDown 0.5s linear forwards";
    hiddenBackImg.style.animation="backOut 0.5s linear forwards";
    setTimeout(() => {
        experience.style.top= "40%";
        quote.style.top= "40%";
        hiddenBackImg.style.display= "none";
        
    }, 500);
    quote.style.animation= "textDown 0.5s linear forwards"
    
});





