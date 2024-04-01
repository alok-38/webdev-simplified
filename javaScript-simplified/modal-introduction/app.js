/*
  TODO: 2. Select the elements with the following IDs
    * modal
    * open-modal-btn
    * close-modal-btn
    * BONUS: overlay
*/

// TODO: 3. Create a click event listener for the open-modal-btn that adds the class "open" to the modal
// BONUS: Also add the class "open" to the overlay

// TODO: 4. Create a click event listener for the close-modal-btn that removes the class "open" from the modal
// BONUS: Also remove the class "open" from the overlay

// BONUS: Add a click event listener to the overlay that removes the class "open" from the modal and the overlay

const modelEl = document.querySelector('#modal');
const openButtonEl = document.querySelector('#open-modal-btn');
const closeButtonEl = document.querySelector('#close-modal-btn');
const overlayEl = document.querySelector('#overlay');

openButtonEl.addEventListener('click', () => {
  modelEl.classList.add('open');
  overlayEl.classList.add('open');
});

/*
  TODO: 4. Create a click event listener for the close-modal-btn that removes the class "open" from the modal
  BONUS: Also remove the class "open" from the overlay
*/

closeButtonEl.addEventListener('click', () => {
  modelEl.classList.remove('open');
  overlayEl.classList.remove('open');
});

/*
  BONUS: Add a click event listener to the overlay that removes the class "open" from the modal and the overlay
*/

overlayEl.addEventListener('click', () => {
  modelEl.classList.remove('open');
  overlayEl.classList.remove('open');
});