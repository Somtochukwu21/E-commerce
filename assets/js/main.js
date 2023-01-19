window.addEventListener("load", () => {
  const openMenu = document.querySelector(".icon-menu");
  const closeMenu = document.querySelector(".icon-close");

  const navBar = document.querySelector(".nav-bar");
  const navBarClass = navBar.classList;

  openMenu.addEventListener("click", () => {
    navBarClass.remove("hidden");
  });

  closeMenu.onclick = () => {
    navBarClass.add("hidden");
  };

  window.onclick = function (event) {
    if (event.target == navBar) {
      navBarClass.add("hidden");
    }
  };
});
