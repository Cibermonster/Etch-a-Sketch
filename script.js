const container = document.querySelector('.container');
const btnResize = document.createElement('button');
const buttonsContainer = document.querySelector('.buttons');
const sizeContainer = document.querySelector('.sizeSelection');

function createDivs(col, row) {
    for (let i = 0; i < (col * row); i++) {
        const div = document.createElement('div');
        div.style.border = '1px solid rgb(90, 10, 10)';
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
        container.appendChild(div).classList.add('box')
    }
    container.setAttribute('id', 'sketchPad');
}
createDivs(16,16);

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
var defaultColor = "#FFFFFF";

window.addEventListener("load", startup, false);

function startup() {
    colorWell = document.querySelector("#colorPicker");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", update, false);
    colorWell.addEventListener("change", update, false);
    colorWell.select();
    setcolor(defaultColor)
}

function update(event) {
    setcolor(event.target.value);
}

function setcolor(x) {
    const boxs = container.querySelectorAll('.box')
    boxs.forEach(box => box.addEventListener('mouseover', () => {
        let Rnum = Math.floor(Math.random() * 255)
        box.style.background = x
    }))
}