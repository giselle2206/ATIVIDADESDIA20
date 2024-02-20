// 4.Crie um programa que recebe um número de 1 a 7 e imprime o dia da semana correspondente (1 - Domingo, 2 - Segunda, ..., 7 - Sábado).

var numeroDia = parseInt(prompt("Digite um número de 1 a 7:"));

if (numeroDia === 1) {
    alert("Domingo");
} else if (numeroDia === 2) {
    alert("Segunda-feira");
} else if (numeroDia === 3) {
    alert("Terça-feira");
} else if (numeroDia === 4) {
    alert("Quarta-feira");
} else if (numeroDia === 5) {
    alert("Quinta-feira");
} else if (numeroDia === 6) {
    alert("Sexta-feira");
} else if (numeroDia === 7) {
    alert("Sábado");
} else {
    alert("Número inválido! Por favor, insira um número de 1 a 7.");
}