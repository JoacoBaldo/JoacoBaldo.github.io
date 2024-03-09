const imgContainer = document.querySelector(".showcase > div");
const img = document.querySelector(".showcase video");
const shadow = document.querySelector(".shadow");
const titleOverlay = document.querySelector(".titleOverlay");
const title = document.querySelector(".titleText");
const desc = document.querySelector(".description");

const sizes = document.querySelectorAll(".sizes > li");
const stars = document.querySelectorAll(".stars span");
const price = document.querySelector(".price");

const pag = document.querySelectorAll(".pag");
const prev = document.querySelector(".arr-left");
const next = document.querySelector(".arr-right");
const shoenum = document.querySelector(".shoe-num");
const shoetotal = document.querySelector(".shoe-total");

const option= document.querySelector(".option");

let shoe = 1; 



const prices = [["Python"," Streamlit"," Web Screaping"," matplotlib"," NumPy."],["Python"," NumPy"," Pandas"," matplotlib"," Tensorflow"," SQLite3"," HTML"," CSS"," ReactPy"]];


const names = [
    [
        "El_desconfiado"
    ],
    [
        "finance_[Ai]"
    ],
];

const descriptions = [
    [
        "El desconfiado es un programa que califica la confiabilidad de una publicación de Mercado Libre tomando en cuenta diferentes factores sobre el vendedor y el producto."
    ],
    [
        "Supongamos que necesitas ahorrar pero no sabes cómo y contratas a un asesor financiero llamado Julian. Él Recomienda que inviertas en determinados activos según tu perfil. Ahora, imaginá que Julian es una computadora que no sólo recomienda en qué invertir sino que lo hace todo por usted. Esto es lo que significa finance_[Ai]."
    ],
];

const ratings = [4,5];

function getImage(shoe){
    skills = ["El_desconfiado.mp4","finance_[Ai].mp4"]
    return "logos/" + skills[shoe-1];
}

function resetActive(element,elementClass,i) {
    for(let i = 0; i < element.length; i++) {
        element[i].classList.remove(elementClass + "-active");
    }
    element[i].classList.add(elementClass + "-active");
}

function animate(element,time,anim) {

    element.style.animation = anim;
    setTimeout(()=> {
        element.style.animation = "none";
    },time);
}

function resetStars(shoe) {
    for (let i = 0; i < ratings[shoe]; i++) {
        stars[i].innerText = "";
    }

    for (let i = 0; i < ratings[shoe]; i++) {
        stars[i].innerText = "star";
    }

}

for (let i = 0; i < sizes.length; i++) {
    sizes[i].addEventListener("click",(e) => {
        resetActive(sizes, "size",i);
    });
}

shoetotal.innerText = "0" + pag.length;
shoenum.innerText= "0" + shoe;
price.innerText = prices[0];
resetStars(shoe -1);
title.innerText = names[0][0];
desc.innerText = descriptions[0]; 



function slider(shoe) {
    setTimeout(() => {
        img.src = getImage(
            shoe
        );
    }, 600);



    resetActive(pag,"pag",shoe -1);

    desc.innerText = descriptions[shoe -1];
    title.innerText = names[shoe -1];
    price.innerText = prices[shoe -1];
    resetStars(shoe -1);
    shoenum.innerText = "0" + shoe;

    animate(img,1550,"replace 1.5s ease-in")
    animate(shadow,1550,"shadow2 1.5s ease-in")
    animate(titleOverlay,850,"title 800ms ease")
}


prev.addEventListener("click", () => {
    shoe--;

    if (shoe < 1) {
        shoe = pag.length;
    }

    slider(shoe);
});

next.addEventListener("click", () => {
    shoe++;

    if (shoe > pag.length) {
        shoe = 1;
    }
    slider(shoe);
});
