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
                square.dataset.darkness = 0;
                square.addEventListener('mouseenter', function() {
                    let darkness = parseInt(square.dataset.darkness, 10);
                    if (darkness == 0) {
                        const randomColor = getRandomColor();
                        square.style.backgroundColor = randomColor;
                        square.dataset.baseColor = randomColor;
                    }
                    if (darkness < 10) {
                        darkness += 1;
                        square.dataset.darkness = darkness;
                        square.style.backgroundImage = `linear-gradient(rgba(0,0,0,${darkness * 0.1}), rgba(0,0,0,${darkness * 0.1}))`;
                    }
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