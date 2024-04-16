const buttons = document.querySelectorAll('button');
const divElement = document.getElementById('screen');

for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener('click', (e) => {
        console.log('Button clicked!');
        divElement.style.backgroundColor = e.target.id;
    });
}