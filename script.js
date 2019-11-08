const container = document.querySelector('.container');

const createGrid = (cells) => {
    container.style.gridTemplateColumns = `repeat(${cells}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${cells}, 1fr)`;
    for (let i = 0; i < cells; i++) {
        for (let j = 0; j < cells; j++) {
            const div = document.createElement('div');
            div.classList.add('item');
            container.appendChild(div);
        }
    }
    //colorize functionality
    const grid = document.querySelectorAll('.item');
    grid.forEach((selection) => {
        selection.addEventListener('mouseenter', (e) => {
            e.target.classList.add('hovered');
        });
    });
}

createGrid(16);