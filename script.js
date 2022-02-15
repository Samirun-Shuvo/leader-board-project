const sectionTitles = document.getElementsByClassName('section-title');
for (const sectionTitle of sectionTitles) {
    sectionTitle.style.color = 'gray';
}
const players = document.getElementsByClassName('player');
for (const player of players) {
    player.style.backgroundColor = 'rgba(238,130,238,1)';
}

document.getElementById('add-item-btn').addEventListener
    ('click', function () {
        //create element
        const li = document.createElement('li');
        li.innerText = 'new items';
        //set where to
        const ul = document.getElementById('list-item');
        //append new element
        ul.appendChild(li);

    })
document.getElementById('add-number').addEventListener('click', function () {
    const inputNumber = document.getElementById('input-number');
    let numberInput = inputNumber.value;
    if (numberInput < 5) {
        numberInput = parseInt(inputNumber.value) + 1;
        inputNumber.value = numberInput;
    } else {
        document.getElementById('add-number').disabled = true;
    }

})