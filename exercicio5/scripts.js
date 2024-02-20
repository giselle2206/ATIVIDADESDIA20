// 5.Escreva um programa que recebe o nome de um mês e imprime o número de dias daquele mês. Considere um ano não bissexto.

var nomeMes = prompt("Digite o nome do mês:");

nomeMes = nomeMes.toLowerCase();

switch (nomeMes) {
    case "janeiro":
    case "março":
    case "maio":
    case "julho":
    case "agosto":
    case "outubro":
    case "dezembro":
        alert("O mês de " + nomeMes + " tem 31 dias.");
        break;
    case "abril":
    case "junho":
    case "setembro":
    case "novembro":
        alert("O mês de " + nomeMes + " tem 30 dias.");
        break;
    case "fevereiro":
        alert("O mês de " + nomeMes + " tem 28 dias em um ano não bissexto.");
        break;
    default:
        alert("Por favor, insira um nome de mês válido.");
}