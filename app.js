const left = document.querySelector("#left");

const right = document.querySelector("#right");

const main = document.querySelector(".main");

const images = ["donut.jpg" , "left.png","right.png","facebook.png"] 

const i = 0;

main.style.background=  `url(img/facefook.png)`

function leftClick(){
    i--;
    if(i < 0){
        i = images.length-1;
    }
    main.style.background-Color  = `url(.images/${images[i]})`;

}

function rightClick(){
    i++;
    if(i>images.length){
        i = 0;
    }
    main.style.background
}


left.addEventListener("click" , leftClick);
// right.addEventListener("click" , rightClick);