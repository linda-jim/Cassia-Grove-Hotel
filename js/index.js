window.addEventListener("scroll", () => {
  const navWrapper = document.querySelector(".nav-wrapper");

  if (window.scrollY > 50) {
    navWrapper.classList.add("scrolled");
  } else {
    navWrapper.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const textContainer = document.querySelector(".animated-text");

  if (textContainer) {
    const words = textContainer.innerText.split(" ");

    textContainer.innerText = "";

    words.forEach((word, index) => {
      const span = document.createElement("span");
      span.classList.add("word");
      span.innerText = word;

      span.style.animationDelay = `${index * 0.1}s`;

      textContainer.appendChild(span);
    });
  }
});
