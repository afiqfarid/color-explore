const containerEl = document.querySelector(".container")

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    
    colorContainerEl.classList.add("color-box");

    containerEl.appendChild(colorContainerEl);
}

const colorContainerElAll = document.querySelectorAll(".color-box");

// console.log(colorContainerElAll);

generateColors(); 

function generateColors(){
    colorContainerElAll.forEach((colorContainerEl)=>{
        const newColorCode = randomColor();
        const newColorCode2 = randomColor();
        colorContainerEl.style.background = "#" + newColorCode;
        // colorContainerEl.style.background = "linear-gradient(to right, #" + newColorCode + ", #" + newColorCode2 + ")";
        colorContainerEl.innerText = "#" + newColorCode;
    })
}

function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = ""

    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode = colorCode + chars.substring(randomNum, randomNum + 1);
    }
    return colorCode;
}