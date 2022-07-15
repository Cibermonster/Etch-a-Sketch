const container = document.querySelector('.container');
const btnBlack = document.createElement('button');
const btnGray = document.createElement('button');
const btnResize = document.createElement('button');
const btnRGB = document.createElement('button');
const buttonsContainer = document.querySelector('.buttons');
const sizeContainer = document.querySelector('.sizeSelection');

function createDivs(col, row) {
    for (let i = 0; i < (col * row); i++) {
        const div = document.createElement('div');
        div.style.border = '1px solid red';
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
        container.appendChild(div).classList.add('box')
    }
    container.setAttribute('id', 'sketchPad');
}
createDivs(16,16);

function grayColor() {
    const boxs = container.querySelectorAll('.box')
    btnGray.textContent = 'Gray'
    btnGray.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let Rnum = Math.floor(Math.random() * 255)
            box.style.background = colorSelected
        }))

    })
    buttonsContainer.appendChild(btnGray).classList.add('btn')
}
grayColor();

function reset() {
    const boxs = container.querySelectorAll('.box')
    boxs.forEach(box => box.remove())
}

function resizeButton() {
    const boxs = container.querySelectorAll('.box')
    btnResize.textContent = 'Resize'
    btnResize.addEventListener('click', () => {
        reset();
        createDivs(slider.value,slider.value);
        grayColor();
    })
    sizeContainer.appendChild(btnResize).classList.add('btn')
}
resizeButton();

// SIZE SLIDER //
var slider = document.getElementById("sizeSlider");
var output = document.getElementById("sze");

slider.value = 16
output.innerHTML = slider.value +' x '+slider.value;

slider.oninput = function() {
  output.innerHTML = this.value +' x '+this.value;
} 

// COLOR PICKER //
var colorWell;
var defaultColor = "#fff";

window.addEventListener("load", startup, false);

function startup() {
    colorWell = document.querySelector("#colorPicker");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
    colorWell.addEventListener("change", updateAll, false);
    colorWell.select();
}

  
colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
    document.querySelectorAll("p").forEach(function(p) {
        p.style.color = event.target.value;
        console.log(event.target.value)
    });
}

function updateFirst(event) {
    var p = document.querySelector("p");

    if (p) {
        p.style.color = event.target.value;
    }
}

function updateAll(event) {
    document.querySelectorAll("p").forEach(function(p) {
        p.style.color = event.target.value;
    });
}
  