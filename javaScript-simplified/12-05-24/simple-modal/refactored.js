const openModalButton = document.getElementById("open-modal-btn");
const closeModalButton = document.getElementById("close-modal-btn");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

const openModal = () => {
  overlay.style.display = modal.style.display = "block";
};

const closeModal = () => {
  overlay.style.display = modal.style.display = "none";
};

const closeModalOnClickOverlay = (event) => {
  if (event.target === overlay) {
    closeModal();
  }
};

openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModalOnClickOverlay);
