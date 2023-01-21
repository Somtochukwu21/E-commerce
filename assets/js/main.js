window.addEventListener("load", () => {
  const openMenu = document.querySelector(".icon-menu");
  const closeMenu = document.querySelector(".icon-close");

  const navBar = document.querySelector(".nav-bar");
  const navBarClass = navBar.classList;

  const dropCart = document.querySelectorAll(".drop-cart");
  const shopList = document.querySelector(".shop-list");
  const cartList = shopList.classList;

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

  dropCart.forEach((element) => {
    let variable = 1;
    element.addEventListener("click", () => {
      if (variable == 1) {
        cartList.remove("hidden");
        return (variable -= 1);
      }

      if (variable == 0) {
        cartList.add("hidden");
        return (variable += 1);
      }
    });
  });
});
