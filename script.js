function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    //se tiver sem light mode, manter a imagem normal//
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  // pegar a tag img

  // se tiver light mode, adicionar a imagem light,
  // substitui a imagem
}
