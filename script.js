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

// add click event to reset button
resetBtn.addEventListener('click', function() {
    // for each item remove the orange class to remove the background
    gridItems.forEach(item => {
        item.classList.remove('orange');
    })
})

// bring in new grid button
const newGridBtn = document.getElementById('new-grid');

// prompt the user on click
newGridBtn.addEventListener('click', function() {
    // ask user for his number for new grid
    const userGridOption = prompt('Enter a Number between 1 and 100');
    const newResetBtn = document.getElementById('reset');
    const rows = userGridOption;
    const columns = userGridOption;
    console.log(userGridOption);

    // remove the current grid from the container
    gridContainer.replaceChildren();

    // make new grid appear
    makeRows(rows, columns);

    // add mouse enter event for new grid items
    const newGridItems = document.querySelectorAll('.grid-item');
    newGridItems.forEach(item => {
        item.addEventListener('mouseenter', function (e) {
            // change the background color to orange 
            e.target.classList.add('orange');
        })
    })

    // add reset btn
    newResetBtn.addEventListener('click', function() {
        newGridItems.forEach(item => {
            item.classList.remove('orange');
        })
    })
})