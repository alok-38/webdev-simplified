const openModalButton = document.getElementById("open-modal-btn");
const closeModalButton = document.getElementById("close-modal-btn");
const modalEl = document.getElementById("modal");
const overlayEl = document.getElementById("overlay");

const closeModal = () => {
  modalEl.style.display = "none";
  overlayEl.style.display = "none";
};

closeModalButton.addEventListener("click", closeModal);

const openModal = () => {
  modalEl.style.display = "block";
  overlayEl.style.display = "block";
};

openModalButton.addEventListener("click", openModal);

// Event listener for closing the modal when clicking anywhere on the overlay
overlayEl.addEventListener("click", function (event) {
  if (event.target === overlayEl) {
    closeModal();
  }
});
