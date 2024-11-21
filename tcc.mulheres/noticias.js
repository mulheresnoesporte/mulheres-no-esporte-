
document.querySelectorAll('.noticia').forEach(noticia => {
    noticia.addEventListener('click', () => {
      alert("Clique na notícia: " + noticia.querySelector("h3, p").innerText);
    });
  });