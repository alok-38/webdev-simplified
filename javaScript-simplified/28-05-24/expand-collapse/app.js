const expandButtonElements = document.querySelectorAll(".expand-button");

expandButtonElements.forEach((button) => {
  button.addEventListener("click", () => {
    const cardBodyElement = button.closest(".card").querySelector(".card-body");

    if (cardBodyElement.classList.contains("show")) {
      cardBodyElement.classList.remove("show");
      button.textContent = "Expand";
    } else {
      cardBodyElement.classList.add("show");
      button.textContent = "Collapse";
    }
  });
});
