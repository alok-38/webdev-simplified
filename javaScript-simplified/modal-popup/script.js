const popup = document.querySelector('.popup');

const openPopup = () => {
    popup.classList.add('open-popup');
}

const closePopup = () => {
    popup.classList.remove('open-popup');
}

const openBtn = document.querySelector('.btn'); // Select the button that opens the popup
const closeBtn = document.querySelector('.popup button[type="submit"]'); // Select the button within the popup to close it

openBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
