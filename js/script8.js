function carregarComesticos() {
  //fazer o carregadomento da url com cosméticos
  //vamos usar o comando fetch para localizar e
  //carregar os cosméticos e exibir em página html
  fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  )
    .then((response) => response.json())
    .then((dados) => {
      console.log(dados);
      var saida = "<div id=cosmeticos>";
      dados.map((item, ix) => {
        if (item.rating == null || item.rating <= 0.5) {
          saida += `
          <div>
              <img src=${item.image_link}>
              <p class=like>🤍</p>
              <h2>${item.name}</h2>
              <p class=preco>R$ ${item.price}</p>
              <p class=nota>Avaliação: ✩ ✩ ✩ ✩ ✩</p>
              </div>
              `;
        }

        if (item.rating > 0.5 && item.rating <= 1.5) {
          saida += `
          <div>
              <img src=${item.image_link}>
              <p class=like>🤍</p>
              <h2>${item.name}</h2>
              <p class=preco>R$ ${item.price}</p>
              <p class=nota>Avaliação: ⭐ ✩ ✩ ☆ ✩</p>
              </div>
              `;
        }

        if (item.rating > 1.5 && item.rating <= 2.5) {
          saida += `
          <div>
              <img src=${item.image_link}>
              <p class=like>🤍</p>
              <h2>${item.name}</h2>
              <p class=preco>R$ ${item.price}</p>
              <p class=nota>Avaliação: ⭐ ⭐ ✩ ✩ ✩</p>
              </div>
              `;
        }

        if (item.rating > 2.5 && item.rating <= 3.5) {
          saida += `
          <div>
              <img src=${item.image_link}>
              <p class=like>🤍</p>
              <h2>${item.name}</h2>
              <p class=preco>R$ ${item.price}</p>
              <p class=nota>Avaliação: ⭐ ⭐ ⭐ ✩ ✩</p>
              </div>
              `;
        }

        if (item.rating > 3.5 && item.rating <= 4.5) {
          saida += `
          <div>
              <img src=${item.image_link}>
              <p class=like>🤍</p>
              <h2>${item.name}</h2>
              <p class=preco>R$ ${item.price}</p>
              <p class=nota>Avaliação: ⭐ ⭐ ⭐ ⭐ ✩</p>
              </div>
              `;
        }

        if (item.rating > 4.5) {
          saida += `
          <div>
              <img src=${item.image_link}>
              <p class=like>🤍</p>
              <h2>${item.name}</h2>
              <p class=preco>R$ ${item.price}</p>
              <p class=nota>Avaliação: ⭐ ⭐ ⭐ ⭐ ⭐</p>
              </div>
              `;
        }
      });

      saida += "</div>";
      document.body.innerHTML += saida;
    })
    .catch((erro) => console.error(`Erro ao tentar executar a api -> ${erro}`));
}
