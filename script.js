/** @format */

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");

  // Show sidebar by default on mobile
  if (window.innerWidth <= 1024) {
    sidebar.classList.remove("hidden");
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      sidebar.classList.add("hidden"); // Hide sidebar on larger screens
    } else {
      sidebar.classList.remove("hidden"); // Ensure it's visible on smaller screens
    }
  });
});

// Open and close functions
function openNav() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.remove("hidden");
}

function closeNav() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("hidden");
}
