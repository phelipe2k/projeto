function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Salvar preferência no localStorage
  const theme = html.classList.contains("light") ? "light" : "dark"
  localStorage.setItem("theme", theme)
}

// Aplicar tema salvo ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "light") {
    document.documentElement.classList.add("light")
  } else if (
    !savedTheme &&
    window.matchMedia("(prefers-color-scheme: light)").matches
  ) {
    document.documentElement.classList.add("light")
  }
})
