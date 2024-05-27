function mudar() {
  const html = document.documentElement
  html.classList.toggle("escuro")
  const img = document.querySelector("#perfil img")

  if (html.classList.contains("escuro")) {
    img.setAttribute("src", "./assets/assets/avatar.png")
  } else {
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  }
}
