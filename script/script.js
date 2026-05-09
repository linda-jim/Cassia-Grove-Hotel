window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".custom-navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0,0,0,0.25)";
  } else {
    navbar.style.background = "rgba(255,255,255,0.08)";
  }
});
