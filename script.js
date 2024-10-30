/** @format */

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");

  // Initially hide the sidebar on mobile
  sidebar.classList.add("hidden");

  // Open and close buttons
  document.querySelector(".openbtn").addEventListener("click", openNav);
  document.querySelector(".closebtn").addEventListener("click", closeNav);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      sidebar.classList.add("hidden"); // Hide on larger screens
    }
  });
});

// Function to open the sidebar
function openNav() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.remove("hidden"); // Remove hidden class to show sidebar
  sidebar.classList.add("open"); // Add open class when sidebar is visible
}

function closeNav() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("hidden"); // Add hidden class to hide sidebar
  sidebar.classList.remove("open"); // Remove open class when sidebar is hidden
}
