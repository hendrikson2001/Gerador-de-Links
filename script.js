function toggleMode() {
  const html = document.body
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode adiciona a imgem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver light mode adiciona, manter a img normal
    img.setAttribute("src", "./assets/avatar-dark.png")
  }
}
