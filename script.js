
const main = document.getElementById('main');


function createGrid(x) {

    //Creates container for grid
    const container = document.createElement('div');
    container.classList.add('container');
    //container.appendChild(chk);
    main.appendChild(container);


    //Creates the box that will be generated

    for (let i = 0; i < x; i++) {

        const row = document.createElement('div');

        row.classList.add('row')

        container.appendChild(row);
        
        for (let i = 0; i < x; i++) {

            const column = document.createElement('div');
            const chk = document.createTextNode(i);

            column.classList.add('column');
            column.appendChild(chk);    
            
            column.addEventListener("mouseover", function (event) {
                event.target.style.backgroundColor = "black";
            })

            row.appendChild(column);
        }
    };


}

const slider = document.getElementById('slider');
const output = document.getElementById('output');
output.innerHTML = `${slider.value} x ${slider.value}`;

slider.oninput = function() {
    output.innerHTML = `${slider.value} x ${slider.value}`;
    main.innerHTML = "";
    createGrid(slider.value);
}

const button = document.getElementById('reset');

button.onclick = function() {
    reset();
}

function reset() {
    main.innerHTML = "";
    createGrid(slider.value);
}

createGrid(8);