const foto = document.querySelector('.foto');
let brilho = 30;
let aumentando = true;

function animarBrilho() {
  if (aumentando) {
    brilho += 0.5;
    if (brilho >= 60) aumentando = false;
  } else {
    brilho -= 0.5;
    if (brilho <= 30) aumentando = true;
  }

  foto.style.boxShadow = `0 0 ${brilho}px #1F1F1F`;
  requestAnimationFrame(animarBrilho);
}

animarBrilho();


document.addEventListener("DOMContentLoaded", () => {
  const botaoModoLua = document.getElementById("modo-lua");

  // Verifica o estado salvo no localStorage
  const modoEscuroAtivo = localStorage.getItem("modoEscuro") === "true";
  if (modoEscuroAtivo) {
    document.body.classList.add("dark-mode");
    botaoModoLua.textContent = "☀️";
  }

  // Alterna o modo ao clicar
  botaoModoLua.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const ativo = document.body.classList.contains("dark-mode");
    localStorage.setItem("modoEscuro", ativo);
    botaoModoLua.textContent = ativo ? "☀️" : "🌙";
  });
});