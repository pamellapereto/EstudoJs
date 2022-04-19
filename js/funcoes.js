//Encontra o maior valor em um array

function maior(numeros) {
  /*Transformar os números em números, realizando um parse para inteiros*/

  for (var c = 0; c < numeros.length; c++) {
    numeros[c] = parseInt(numeros[c]);
  }

  var m = numeros[0];
  for (var i = 1; i < numeros.length; i++) {
    if (numeros[i] > m) {
      m = numeros[i];
    }
  }
  console.log("O maior número é: " + m);
  return m;
}

//Encontra o menor valor em um array
function menor(numeros) {
  for (var c = 0; c < numeros.length; c++) {
    numeros[c] = parseInt(numeros[c]);
  }
  var m = numeros[0];
  for (var i = 1; i < numeros.length; i++) {
    if (numeros[i] < m) {
      m = numeros[i];
    }
  }
  console.log("O menor número é: " + m);
  return m;
}

function verificarVazio(controle) {
  if (controle.value == "" || controle.value == null) {
    alert("O campo " + controle.id + " não pode ser vazio!");
  }
}

function dataHora() {
  return (
    new Date().toLocaleDateString() + " - " + new Date().toLocaleTimeString
  );
}
