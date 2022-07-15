const container = document.querySelector('.container');
const btnBlack = document.createElement('button');
const btnGray = document.createElement('button');
const btnResize = document.createElement('button');
const btnRGB = document.createElement('button');
const buttonsContainer = document.querySelector('.buttons');

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

createDivs(10,10);

function grayColor() {
    const boxs = container.querySelectorAll('.box')
    btnGray.textContent = 'Gray'
    btnGray.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let Rnum = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${Rnum},${Rnum},${Rnum})`
        }))

    })
    buttonsContainer.appendChild(btnGray).classList.add('btn')
}

grayColor();

function resizeTo() {
    
}

function resizeButton() {
    const boxs = container.querySelectorAll('.box')
    btnResize.textContent = 'Resize'
    btnResize.addEventListener('click', () => {
        let user = prompt('What size?')
        if (user === null || user < 1) {
            resizeTo();
            createDivs(10,10);
        }
    })
    buttonsContainer.appendChild(btnResize).classList.add('btn')
}
resizeButton();

//container.parentNode.removeChild(container);
//createDivs(16,16);

//var m = document.getElementsByName('box')
//m.remove();