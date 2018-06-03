const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill Listners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empties and call drag events
for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// Drag Functions
function dragStart() {
    console.log('start');
    this.className += ' hold';
    setTimeout(()=> (this.className = 'invisible'), 0);
}

function dragEnd() {
    console.log('end');
    this.className = 'fill';
}