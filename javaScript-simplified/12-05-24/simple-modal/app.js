const openModalButton = document.getElementById("open-modal-btn");
const closeModalButton = document.getElementById("close-modal-btn");
const overLayDiv = document.getElementById("overlay");
const modalDiv = document.getElementById("modal");

const openModal = () => {
  overLayDiv.style.display = "block";
  modalDiv.style.display = "block";
};

openModalButton.addEventListener("click", openModal);

const closeModal = () => {
  modalDiv.style.display = "none";
  overLayDiv.style.display = "none";
};

closeModalButton.addEventListener("click", closeModal);

const closeModalOnclickOverlay = () => {
  overLayDiv.style.display = "none";
  modalDiv.style.display = "none";
};

overLayDiv.addEventListener("click", closeModalOnclickOverlay);
