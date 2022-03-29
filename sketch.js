const container = document.querySelector("#container");
let resolution=getResolution();

function getResolution() {
    let input=Number(window.prompt("How may boxes per row?",""));
    if (input <= 100) { 
        return input;
    } else {
        return 100;
    }  
}

for (let i=1; i<= resolution; i++) {
    let currentRow = document.createElement("div");
    currentRow.classList.add("row");
    for (let j=1; j<=resolution; j++) {
        let currentDot= document.createElement("div");
        currentDot.classList.add("dot");
        currentRow.appendChild(currentDot);
    }
    container.appendChild(currentRow);
}

const dots=document.querySelectorAll(".dot");
dots.forEach((dot) => dot.addEventListener("mouseover",handleHover));

function handleHover(e) {
    dot = e.target;
    dot.classList.add("active");
}

const reset=document.querySelector("#reset");
reset.addEventListener("click",handleReset);

function handleReset() {
    dots.forEach((dot) => dot.classList.remove("active"));
}