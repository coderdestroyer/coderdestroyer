document.addEventListener("DOMContentLoaded", () => {
  // Animasi Ketikan
  const typingElement = document.querySelector(".typing");
  const text = "Ferdyan Darwis";
  let index = 0;

  function typeText() {
      if (index < text.length) {
          typingElement.textContent += text.charAt(index);
          index++;
          setTimeout(typeText, 150);
      }
  }

  typeText(); // Memulai animasi ketikan
});
