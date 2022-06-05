const main = document.getElementById('main');
createGrid(8);

//GRID creation and DRAW implementation thru eventlistener
function createGrid(x) {

    const container = document.createElement('div');
    container.classList.add('container');
    main.appendChild(container);

    for (let i = 0; i < x; i++) {

        const row = document.createElement('div');
        row.classList.add('row')
        container.appendChild(row);
        
        for (let i = 0; i < x; i++) {

            const column = document.createElement('div');
            column.classList.add('column');
            
            column.addEventListener("mouseover", function (event) {
                const active = document.activeElement.id;

                switch (active) {
                    case 'rainbow':
                        event.target.style.backgroundColor = `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, 1)`;
                        break;
                    case 'eraser':
                        event.target.style.backgroundColor = "rgba(185, 185, 185, 1)";
                        break;
                    case 'solid':
                        event.target.style.backgroundColor = "rgba(95, 116, 106, 0.822)";
                        break;
                    case 'downOpac':
                        

                        event.target.style.backgroundColor = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha -= .10})`
                        
                        break;
                    case 'upOpac':

                        event.target.style.backgroundColor = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha += .10})`
                        break;
                    default:
                        event.target.style.backgroundColor = "rgba(95, 116, 106, 0.822)";
                }
            })
            row.appendChild(column);
        }
    };
}

//what does this do?
function RGBA(red, green, blue, alpha) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;
    this.getCSS = function () {
        return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
    }
}

//GRID size input -> SLIDER
const slider = document.getElementById('slider');
const output = document.getElementById('output');
output.innerHTML = `${slider.value} x ${slider.value}`;
slider.oninput = function() {
    output.innerHTML = `${slider.value} x ${slider.value}`;
    main.innerHTML = "";
    createGrid(slider.value);
};
//reset button
const resetButton = document.getElementById('reset');
resetButton.onclick = function() {
    main.innerHTML = "";
    createGrid(slider.value);
};