function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // Trocar a imagem do perfil
  const img = document.querySelector("#profile img");
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
  }

  // Salvar preferência no localStorage
  const theme = html.classList.contains("light") ? "light" : "dark";
  localStorage.setItem("theme", theme);
}

// Aplicar tema salvo ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.documentElement.classList.add("light");
    const img = document.querySelector("#profile img");
    img.setAttribute("src", "./assets/avatar-light.png");
  }
});
