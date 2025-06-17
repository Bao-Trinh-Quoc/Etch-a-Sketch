document.addEventListener('DOMContentLoaded', function() {
    const grid = document.querySelector('#grid');
    const setGridBtn = document.querySelector('setGridSize');

    const size = 16;
    let currentSize = size;

    function createGrid(size) {
        grid.innerHTML = '';    // clear existing grid if any
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const square = document.createElement('div');
                square.classList.add('square');
                square.addEventListener('mouseenter', function() {
                    square.classList.add('hover');
                });
                grid.appendChild(square);   
            }
        }
    }
    
    
    document.documentElement.style.setProperty('--grid-size', currentSize);
    createGrid(currentSize);
});