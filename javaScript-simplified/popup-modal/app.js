const openModalBtn = document.getElementById('open-modal-btn');
const overlayDiv = document.getElementById('overlay');
const modalDiv = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal-btn');

const hideModalBtn = () => {
    modalDiv.style.display = 'none';
    overlayDiv.style.display = 'none'; // Hide the overlay when modal closes
};

const unhideModalDiv = () => {
    modalDiv.style.minHeight = '70vh';
    modalDiv.style.display = 'flex';
    modalDiv.style.flexDirection = 'column';
    modalDiv.style.alignItems = 'center';
    modalDiv.style.justifyContent = 'center';
    overlayDiv.style.display = 'block'; // Show the overlay when modal opens
};

// Function to hide modal when overlay is clicked
const hideModalOnOverlayClick = (event) => {
    if (event.target === overlayDiv) {
        hideModalBtn();
    }
};

openModalBtn.addEventListener('click', unhideModalDiv);
closeModalBtn.addEventListener('click', hideModalBtn);
overlayDiv.addEventListener('click', hideModalOnOverlayClick);
