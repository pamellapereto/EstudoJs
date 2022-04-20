var nomes = ["Paula", "Henrique", "Vanessa"];

for (var i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

nomes.forEach(saida);
function saida(valor, indice) {
  console.log("Do foreach com função fora → " + valor, indice);
}

//Variação do foreach() com a função dentro da estrutura
nomes.forEach(function (valor, indice) {
  console.log("Do foreach com função dentro → " + valor, indice);
});

//Variação do foreach() com arrow function
nomes.forEach((valor, indice) => {
  console.log("Do foreach com arrow function → " + valor, indice);
});

/* ---------------------------- Map ---------------------------- */

nomes.map((valor, indice) => {
  console.log("Posição: " + indice + " | Nome: " + valor);
});

//Criar um objeto chamado cliente
//Para a definição dos dados do cliente é importante que estes fiquem entre chaves
//Esta estrutura é do tipo chave - valor

const endereco = {
  tipo: "Rua",
  logradouro: "São José do Campestre",
  numero: "390",
  complemento: "Casa 1",
  bairro: "Jardim Danfer",
};

const cliente = {
  id: 1,
  nome: "Paula de Oliveira",
  idade: 25,
  cpf: "383.036.508-07",
  endereco: endereco,
};

const prodCalca = {
  id: 1,
  nome: "Calça Jeans",
  preco: "R$ 79,90",
};

const prodBlusa = {
  id: 2,
  nome: "Blusa de Algodão",
  preco: "R$ 39,90",
};

const prodTenis = {
  id: 3,
  nome: "Tênis",
  preco: "R$ 240,90",
};

const pedido = {
  id: 5514,
  data: "20/04/2022",
  hora: "15:00",
  cliente: cliente,
  produtos: [prodCalca, prodBlusa, prodTenis],
  entrega: endereco,
};

console.log("Saída do objeto cliente");
console.log(cliente);

console.log("Saída do objeto endereço");
console.log(endereco);

console.log("Saída do objeto pedido");
console.log(pedido);

const out = document.getElementById("output");
out.innerHTML += `Id do Pedido: ${pedido.id}`;
out.innerHTML += `<br><br> Nome do Cliente: ${pedido.cliente.nome}`;
pedido.produtos.map((pr, ix) => {
  out.innerHTML += `<br><br> Pedidos do Cliente: ${pr.nome}`;
});
out.innerHTML += `<br><br> Entregar em: ${pedido.entrega.logradouro}`;
