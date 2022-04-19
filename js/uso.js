/*Verificar qual página que irá abrir este arquivo javascript*/

/*Pega a url completa do navegador*/
var pagina = window.location;
console.log(pagina);

/*Quebrar a url onde houver barra*/
pagina = pagina.href.split("/");
console.log(pagina);

/*Pegar o último elemento do array página criado acima*/
pagina = pagina[pagina.length - 1];
console.log(pagina);

if (pagina == "index7.html") {
  document.body.style.backgroundColor = "rgb(248, 106, 143, 0.4)";
  /*
    acessar a caixa(input) chamada números, capturar estes números e utilizar
    a função maior para encontra o maior valor entre eles
    */

  /*referenciar um elemento de input da tela home*/
  const txtN = document.getElementById("txtN");

  /*Aplicar um evento chamado blur, ou seja, quando a caixa perder o foco*/
  txtN.onblur = function () {
    //Capturar o valor contido em txtN, ou seja, os números dentro desta caixa e alocar em um array
    var numeros = txtN.value.split(",");
    alert("O maior número é: " + maior(numeros));
    alert("O menor número é: " + menor(numeros));
  };
}

if (pagina == "index8.html") {
  document.body.style.backgroundColor = "rgb(214, 193, 238, 0.6)";
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const CPF = document.getElementById("CPF");
  const telefone = document.getElementById("telefone");

  nome.onblur = () => {
    verificarVazio(nome);
  };

  email.onblur = () => {
    verificarVazio(email);
  };

  CPF.onblur = () => {
    verificarVazio(CPF);
  };

  telefone.onblur = () => {
    verificarVazio(telefone);
  };
}
