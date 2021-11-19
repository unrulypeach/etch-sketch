
const main = document.getElementById('main');


function createGrid(x) {

    //Creates container for grid
    const container = document.createElement('div');
    container.classList.add('container');
    //container.appendChild(chk);
    main.appendChild(container);


    //Creates the box that will be generated



    for (let i = 0; i < (x * x); i++) {

        const box = document.createElement('div');
        const chk = document.createTextNode(i);
        box.classList.add('box');
        box.appendChild(chk);

        box.addEventListener("mouseover", function (event) {
            event.target.style.backgroundColor = "yellow";
        })

        
        container.appendChild(box);
    };


}




createGrid(16);


