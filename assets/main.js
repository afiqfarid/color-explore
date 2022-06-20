const containerEl = document.querySelector(".container")

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    
    colorContainerEl.classList.add("color-box");

    containerEl.appendChild(colorContainerEl);

    /* const colorLabel = document.createElement("span");

    colorLabel.classList.add("color-label");

    colorContainerEl.appendChild(colorLabel); */

}

const colorContainerElAll = document.querySelectorAll(".color-box");

const colorLabelAll = document.querySelectorAll(".color-box span");

// console.log(colorContainerElAll);

generateColors(); 

function generateColors(){
    colorContainerElAll.forEach((colorContainerEl)=>{
        const newColorCode = randomColor();
        const newColorCode2 = randomColor();
        colorContainerEl.style.background = "linear-gradient(45deg, #" + newColorCode + ", #" + newColorCode2 + ")";

        const colorLabel = document.createElement("span");

        colorLabel.classList.add("color-label");

        colorContainerEl.appendChild(colorLabel);

        colorLabel.innerText = "#" + newColorCode + ", #" + newColorCode2;
        // colorLabel.innerText = "Copy 👆";
        // colorLabel.innerHTML = "<i class='bx bxs-copy' ></i>";
    })
}

function randomColor() {
    const chars = "0123456789ABCDEF";
    const colorCodeLength = 6;
    let colorCode = ""

    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode = colorCode + chars.substring(randomNum, randomNum + 1);
    }
    return colorCode;
}