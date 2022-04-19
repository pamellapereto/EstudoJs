/*
Script para o cálculo das operações matemáticas:
    - Soma
    - Subtração
    - Multiplicação
    - Divisão
    - Resto

Será necessário mais 2 variáveis para receber os números dos usuários

*/

var number1, number2;

//Para obter o número digitado pelo usuário usaremos o comando prompt (que é um input para dados)

number1 = prompt("Digite um número ","0");

number2 = prompt("Digite outro número ");

var soma = parseInt(number1) + parseInt(number2);

var substrair = number1 - number2;

var multiplicar = number1 * number2;

var dividir = number1/number2;

var resto = number1 % number2;

alert("O resultado das operações é:\n\n" +
        "soma: " + soma +
        "\nsubtração: " + substrair +
        "\nmultiplicação: " + multiplicar +
        "\ndivisão: " + dividir +
        "\nresto: " + resto);
