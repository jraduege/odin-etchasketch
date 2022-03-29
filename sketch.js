const container = document.querySelector("#container");
let resolution=16;

for (let i=1; i<= resolution; i++) {
    let currentRow = document.createElement("div");
    currentRow.classList.add("row");
    for (let j=1; j<=resolution; j++) {
        let currentDot= document.createElement("div");
        currentDot.classList.add("dot");
        currentDot.textContent = `${j},${i}`;
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