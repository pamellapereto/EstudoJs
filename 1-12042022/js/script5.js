function tabuada() {
  var n = prompt("Entre com um número para fazer a tabuada!");
  var rs = "";
  for (var i = 0; i <= 10; i++) {
    rs += "\n" + n + " x " + i + " = " + n * i;
  }

  return rs;
}

function retangulo(row, col) {
  var saida = "";
  for (let linha = 0; linha <= row; linha++) {
    for (let coluna = 0; coluna <= col; coluna++) {
      saida += "*";
    }
    saida += "<br>";
  }
  document.getElementById("painel").innerHTML = saida;
}

function triangulo() {
  var saida = "";
  for (let linha = 0; linha <= 10; linha++) {
    for (let coluna = 0; coluna <= linha; coluna++) {
      saida += "*";
    }
    saida += "<br>";
  }

  document.getElementById("painelTriangular").innerHTML = saida;
}

function trianguloInvertido() {
  var saida = "";

  for (let linha = 10; linha >= 0; linha--) {
    for (let coluna = 0; coluna <= linha; coluna++) {
      saida += "*";
    }
    saida += "<br>";
  }

  document.getElementById("painelTriangularInvertido").innerHTML = saida;
}

function ordenar(numeros) {
  //Ordenação Insert (Insertation)
  for (let j = 1; j < numeros.length; j++) {
    let x = numeros[j];
    let i;
    for (i = j - 1; i >= 0 && numeros[i] > x; i--) {
      numeros[i + 1] = numeros[i];
    }
    numeros[i + 1] = x;
  }
  for (let p = 0; p < numeros.length; p++) {
    console.log(numeros[p]);
  }
}

// 0   1  2   3   4

//[10, 2, 30, 4, 80];

//j = 1

//x = 2

//i = 0

function tabela() {
  var produtos = [
    ["Produto", "Quantidade", "Preço"],
    ["Calça", "45", "R$ 150,00"],
    ["Blusa", "15", "R$ 45,00"],
    ["Sapato", "35", "R$ 250,00"],
  ];
}
