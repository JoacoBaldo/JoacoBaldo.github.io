const imgContainer = document.querySelector(".showcase > div");
const img = document.querySelector(".showcase img");
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



const prices = [["Python basics - MoureDev by Brains Moure"," Curso de Python para POO - Lucas Dalto"],["Python for data science - FreeBootCamp.org"," Curso completo de MySQL - HolaMundo.io"],"Curso de python para Backend - MoureDev by Brains Moure","Curso completo HTML & CSS - Lucas Dalto","Curso de Git - HolaMundo.io","","English cambridge B2 exam",""];


const names = [
    [
        "Python Bases"
    ],
    [
        "Bibliotecas para Data Science"
    ],
    [
        "Bases del Backend"
    ],
    [
        "Front-end"
    ],
    [
        "Trabajo Grupal"
    ],
    [
        "Office 365"
    ],
    [
        "Inglés/Español"
    ],
    [
        "Organización"
    ],
];

const descriptions = [
    [
        "Python es un lenguaje de programación ampliamente utilizado en aplicaciones web, desarrollo de software, ciencia de datos y aprendizaje automático (ML). Los desarrolladores utilizan Python porque es eficiente y fácil de aprender, y puede ejecutarse en muchas plataformas diferentes."
    ],
    [
        "NumPy, Pandas, matplotlib, sqlite3, numba."
    ],
    [
        "FastAPI, SQLalchemy",
    ],
    [
        "HTML, CSS & ReactPy",
    ],
    [
        "Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia, confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones cuando estas cuentan con una gran cantidad de archivos de código fuente.",
    ],
    [
        "Las herramientas como word, excel y powerpoint me permiten compartir información de manera más dinámica y prolija ",
    ],
    [
        "Soy hablante nativo del español, pero también soy fluido en el idioma inglés",
    ],
    [
        "El uso de Notion me permite organizar mis tareas para ser más productivo",
    ],
];

const ratings = [3,3,3,2,2,3,2,3,3];

function getImage(shoe){
    skills = ["python","numpy","fastapi","frontend","git","office365","english","organization"]
    return "logos/" + skills[shoe-1] +"_logo.png";
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
