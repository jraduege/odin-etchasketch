const container = document.querySelector("#container");
let resolution=16;

for (let i=1; i<= resolution; i++) {
    let currentRow = document.createElement("div");
    currentRow.classList.add("row");
    for (let j=1; j<=resolution; j++) {
        let currentDot= document.createElement("div");
        currentDot.classList.add("dot", `data-x=${j}`, `data-y=${i}`);
        currentDot.textContent = `${j},${i}`;
        currentRow.appendChild(currentDot);
    }
    container.appendChild(currentRow);
}