document.addEventListener('DOMContentLoaded', function() {
    const grid = document.querySelector('#grid');
    const setGridBtn = document.querySelector('#setGridSize');
    const resetBtn = document.querySelector('#resetGrid');
    const size = 16;
    let currentSize = size;

    function getRandomColor() {
        // Generates a random hex color
        return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    }

    function createGrid(size) {
        grid.innerHTML = '';    // clear existing grid if any
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const square = document.createElement('div');
                square.classList.add('square');
                square.addEventListener('mouseenter', function() {
                    // square.classList.add('hover');
                    square.style.backgroundColor = getRandomColor();            
                });
                grid.appendChild(square);   
            }
        }
    }



    setGridBtn.addEventListener('click', function() {
        let size = prompt('Enter grid size (max 100):');
        size = parseInt(size);
        if (isNaN(size) || size < 1 || size > 100) {
            alert('Please enter a number between 1 and 100.');
            return;
        }
        currentSize = size;
        document.documentElement.style.setProperty('--grid-size', currentSize);
        createGrid(currentSize);
    });

    resetBtn.addEventListener('click', function() {
        createGrid(currentSize);
    });
    
    document.documentElement.style.setProperty('--grid-size', currentSize);
    createGrid(currentSize);
});