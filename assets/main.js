const containerEl = document.querySelector(".container")

for (let index = 0; index < 28; index++) {
    const colorContainerEl = document.createElement("div");
    
    colorContainerEl.classList.add("color-box");

    containerEl.appendChild(colorContainerEl);

}

const colorContainerElAll = document.querySelectorAll(".color-box");

const colorLabelAll = document.querySelectorAll(".color-box span");

const popupMsg = document.getElementById("popup-msg");

generateColors();

function generateColors(){
    colorContainerElAll.forEach((colorContainerEl)=>{
        const newColorCode = randomColor();
        const newColorCode2 = randomColor();
        colorContainerEl.style.background = "linear-gradient(45deg, #" + newColorCode + ", #" + newColorCode2 + ")";

        const colorLabel = document.createElement("span");
        colorLabel.classList.add("color-label");
        colorContainerEl.appendChild(colorLabel);
        
        const colorCopy = document.createElement("span");
        colorCopy.classList.add("color-copy");
        colorContainerEl.appendChild(colorCopy);

        colorLabel.innerText = "#" + newColorCode + ", #" + newColorCode2;
        // colorCopy.innerText = "Copy 👆";
        colorCopy.innerHTML = "<i class='bx bx-copy' ></i>";

        colorContainerEl.addEventListener('click', () => {
            navigator.clipboard.writeText("#" + newColorCode + ", #" + newColorCode2);

            popupMsg.classList.add("show_popup");
            
            setTimeout(function(){
                if (popupMsg.classList.contains("show_popup")) {
                    popupMsg.classList.remove("show_popup");
                }
            }, 2000);

        });       
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

const scrambleBtn = document.getElementById("scrambleBtn")

scrambleBtn.addEventListener('click', () => {
    window.location.reload();
})
