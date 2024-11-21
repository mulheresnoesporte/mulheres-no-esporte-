// script.js

// Dados simulados para as escolinhas (agora com imagens)
const escolinhasFutebol = [
    {
      endereco: "Av. Guarulhos, 3117 - Pte. Grande, Guarulhos – SP",
      logo: "lethicia.jpeg"
    },
    {
      endereco: "R. São Jorge, 777 - Tatuapé, São Paulo - SP",
      logo: "https://via.placeholder.com/40?text=2"
    },
    {
      endereco: "Jardim Andaraí, São Paulo - SP, 02115-004",
      logo: "https://via.placeholder.com/40?text=3"
    },
    {
      endereco: "Avenida Giovanni Gronchi, 3260 - Morumbi - São Paulo",
      logo: "https://via.placeholder.com/40?text=4"
    },
    {
      endereco: "R. Visc. de Ouro Preto, 119 - Consolação, São Paulo - SP, 01305-060",
      logo: "https://via.placeholder.com/40?text=5"
    },
    {
      endereco: "Rua Comendador Roberto Ugolini, 200 - Parque da Mooca, São Paulo",
      logo: "https://via.placeholder.com/40?text=6"
    },
    {
      endereco: "R. Palestra Itália, 214 - Perdizes, São Paulo - SP",
      logo: "https://via.placeholder.com/40?text=7"
    },
    {
      endereco: "R. Alm. Saldanha da Gama, 33/35 - Ponta da Praia, Santos - SP",
      logo: "https://via.placeholder.com/40?text=8"
    }
  ];
  
  // Quantidade inicial e incremento
  let futebolDisplayCount = 3;
  
  // Função para renderizar escolas
  function renderSchools(containerId, schools, count) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Limpa o container
  
    schools.slice(0, count).forEach((school) => {
      const schoolCard = document.createElement("div");
      schoolCard.className = "school-card";
  
      schoolCard.innerHTML = `
        <img src="${school.logo}" alt="Logo" class="school-logo">
        <p>${school.endereco}</p>
      `;
  
      container.appendChild(schoolCard);
    });
  }
  
  // Função para carregar mais escolas de futebol
  function loadMoreFutebol() {
    futebolDisplayCount += 3; // Incrementa a quantidade exibida
    renderSchools("futebol-schools", escolinhasFutebol, futebolDisplayCount);
  
    // Oculta o botão se todas as escolas forem exibidas
    if (futebolDisplayCount >= escolinhasFutebol.length) {
      document.getElementById("load-more-futebol").style.display = "none";
    }
  }
  
  // Carrega as escolas ao carregar a página
  document.addEventListener("DOMContentLoaded", () => {
    renderSchools("futebol-schools", escolinhasFutebol, futebolDisplayCount);
  
    // Adiciona evento ao botão de "Mais futebol"
    document
      .getElementById("load-more-futebol")
      .addEventListener("click", loadMoreFutebol);
  });
  
  