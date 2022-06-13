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
        // append to the DOM
        gridContainer.appendChild(cell);
    }
}

// call function
makeRows(16, 16);
