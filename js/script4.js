/*
O script deve receber um número e processar e exibir uma mensagem dizendo se o número digitado é par ou ímpar
*/

var number;

number = prompt("Digite um número ");

if (number % 2 == 0) {
    alert(number + " é um número par!");
}

else {
    alert(number + " é um número ímpar!");
}
