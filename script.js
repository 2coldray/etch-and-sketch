console.log('hello world');

// bring in the container
const gridContainer = document.getElementById('grid');

// make function to generate rows and columns
function makeRows(rows, cols) {
    // put the grid properties on the rows and columns
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);

    // loop to make boxes appear on DOM
    for (let c = 0; c < (rows * cols); c++) {
        // create each cell
        let cell = document.createElement('div');
        // add classlist
        cell.classList.add('grid-item');
        // add id to cell
        cell.setAttribute('id', c + 1);
        // append to the DOM
        gridContainer.appendChild(cell);
    }
}

// call function
makeRows(16, 16);

// save grid items in a node list
const gridItems = document.querySelectorAll('.grid-item');

// loop over list
gridItems.forEach(item => {
    // add a mouse enter event to the to each square 
    item.addEventListener('mouseenter', function (e) {
        // change the background color to orange 
        e.target.classList.add('orange');
    })
})

// remove the class
const resetBtn = document.getElementById('reset');