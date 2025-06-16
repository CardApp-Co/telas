// Sidebar functionality for TelaHomePage
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
    sidebar.classList.toggle("sidebar-open");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const userMale = document.getElementById("user-male");
  if (userMale) {
    userMale.addEventListener("click", toggleSidebar);
  }
  // Optional: close sidebar when clicking outside
  document.addEventListener("click", function (event) {
    const sidebar = document.getElementById("sidebar");
    if (sidebar && sidebar.classList.contains("sidebar-open")) {
      if (!sidebar.contains(event.target) && !userMale.contains(event.target)) {
        sidebar.classList.remove("sidebar-open");
      }
    }
  });
});
