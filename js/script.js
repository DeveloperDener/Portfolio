const typewriterTarget = document.querySelector(".hero-texto h1");
if (typewriterTarget) {
  const texto = "Desenvolvedor Front-End";
  let i = 0;
  typewriterTarget.textContent = "";

  function typeWriter() {
    if (i < texto.length) {
      typewriterTarget.textContent += texto.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  typeWriter();
}
