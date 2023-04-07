const opratorContainer = document.querySelector('.signs');
const opratorDropdown = document.querySelector('.drop-down');

const input1 = document.querySelector('.box1');
const input2 = document.querySelector('.box2');

const oprator = document.querySelector('h2');

const resuleBox = document.querySelector('.result');

const btn = document.querySelector('button');

const add = document.querySelector('.add');
const mul = document.querySelector('.mul');
const sub = document.querySelector('.sub');
const div = document.querySelector('.div');

opratorContainer.addEventListener('mouseenter', () => {
    let size = opratorDropdown.getBoundingClientRect();
    // opratorDropdown.style.height = '170px';
     if( opratorDropdown.style.height === 0 + 'px' ) {
        opratorDropdown.style.height = '170px';
     } else {
        opratorDropdown.style.height = '0px';
     }
});

opratorContainer.addEventListener('mouseleave', () => {
    let size = opratorDropdown.getBoundingClientRect();
    // opratorDropdown.style.height = '170px';
     if( opratorDropdown.style.height === 170 + 'px' ) {
        opratorDropdown.style.height = '0px';
     }
});

add.addEventListener('click', () => {
    oprator.innerHTML = '+';
});

sub.addEventListener('click', () => {
    oprator.innerHTML = '-';
});

div.addEventListener('click', () => {
    oprator.innerHTML = '/';
});

mul.addEventListener('click', () => {
    oprator.innerHTML = 'x';
});



btn.addEventListener('click', () => {
    let input1Value = parseInt(input1.value)
    let input2Value = parseInt(input2.value)

    if (oprator.innerHTML === '+') {
        let result = input1Value + input2Value;
        resuleBox.innerHTML = result;
    } else if(oprator.innerHTML === '/') {
        let result = input1Value / input2Value;
        resuleBox.innerHTML = result;
    } else if(oprator.innerHTML === '-') {
        let result = input1Value - input2Value;
        resuleBox.innerHTML = result;
    } else if(oprator.innerHTML === 'x') {
        let result = input1Value * input2Value;
        resuleBox.innerHTML = result;
    } 
});