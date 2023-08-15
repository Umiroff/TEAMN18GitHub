const bar = document.querySelector(`.menu`);
const dropdown = document.querySelector(`.container ul`);

bar.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});
