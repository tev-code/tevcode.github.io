/** @format */

function openNav() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("open");
  sidebar.classList.remove("hidden");
}

function closeNav() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.remove("open");
  sidebar.classList.add("hidden");
}

// Optional: Close sidebar when clicking outside (improves UX)
document.addEventListener("click", function (event) {
  const sidebar = document.querySelector(".sidebar");
  const openbtn = document.querySelector(".openbtn");
  if (!sidebar.contains(event.target) && !openbtn.contains(event.target)) {
    closeNav();
  }
});
