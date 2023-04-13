//Exercício 1: Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.
var x = 101;
while(x <= 110) {
    console.log("Esses são os 10 primeiros números maiores que 100:" + " " + x);
    x++;
}

//Outra forma de fazer o Exercício 1
for (var x = 101; x <= 110; x++) {
    console.log(x);
  }

//Exercício 2: Faça um script que leia três números inteiros e mostre o maior deles.
var n1 = 1;
var n2 = 35;
var n3 = 101;
  console.log("Esses são os três números escolhidos:" + " " + n1 + ", " + n2 + ", " + n3);

if (n1 > n2 && n1 > n3) {
    console.log("O maior número é:" + " " + n1);
} else if (n2 > n1 && n2 > n3) {
    console.log("O maior número é:" + " " + n2);
} else if (n3 > n1 && n3 > n2) {
    console.log("O maior número é:" + " " + n3);
} 


//Exercício 3: Faça um script que leia três números inteiros, em seguida mostre o maior e o menor deles.

var i1 = 1000;
var i2 = 151;
var i3 = 20;
    console.log("Esses são os três números escolhidos:" + " " + i1 + ", " + i2 + ", " + i3);

if (i1 > i2 && i1 > i3) {
    console.log("O maior número é:" + " " + i1);
} else if (i2 > i1 && i2 > i3) {
    console.log("O maior número é:" + " " + i2);
} else if (i3 > i1 && i3 > i2) 
    console.log("O maior número é:" + " " + i3);

if (i1 < i2 && i1 < i3) {
    console.log("O menor número é:" + " " + i1);
} else if (i2 < i1 && i2 < i3) {
    console.log("O menor número é:" + " " + i2);
} else if (i3 < i1 && i3 < i2) {
    console.log("O menor número é:" + " " + i3);
}

//Exercício 4: Faça um algoritmo que possua as variáveis nome, cpf, idade, data_nascimento. Atribua valores a ela e mostre seus valores. 

var nome = "Meire";
var cpf = "123.456.789-00";
var idade = 43;
var dataNascimento = "17/05/1979"
    console.log("Meu nome é"+" "+ nome + ", tenho"+" "+idade+" anos,"+" nasci no dia "+dataNascimento+" e meu número de CPF é: "+cpf+".")

//Exercício 5: Faça um algoritmo que tenha as variáveis nomeproduto, preco, estoque, validade. Atribua valores a elas e mostre na body.

var nomeProduto = "Batom vermelho";
var preco = 50.00;
var estoque = 100;
var validade = "17/05/2028"
    document.write("Nome do Produto:"+" "+ nomeProduto);
    document.write("<br>Preço do produto: R$"+" "+ preco.toFixed(2));
    document.write("<br>Estoque:"+" "+ estoque + " unidades");
    document.write("<br>Validade:"+" "+ validade);

/*Exercício 6: Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor correspondente em graus Celsius na fórmula: 
(C/5) = (F-32)/9 */

var f = 320;
var c = (f-32)/1.8;
    console.log("A temperatura em Farenheit é: " + f + "F");
    console.log("A temperatura em Celsius é: " + c +"C°");

/*Exercício 7: Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.*/

var salarioAtual = 5000;
var reajuste = 0.1; //Aumento de 10% no salário Atual
var percentual = reajuste*100
var novoSalario = ((salarioAtual*reajuste)+salarioAtual);
    console.log("Salário Atual: R$ " + salarioAtual.toFixed(2));
    console.log("Porcentagem do reajuste = " + percentual + "%");
    console.log("Valor do reajuste: R$ "+ (salarioAtual*reajuste).toFixed(2));
    console.log("Novo salário: R$" + novoSalario.toFixed(2));

/*Exercício 8: O IMC – Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

A fórmula é IMC = peso / ( altura )2 

Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo com as informações abaixo:
    IMC em adultos nas seguites condições: 
a- Abaixo de 18,5 Abaixo do peso 
b- Entre 18,5 e 25 Peso normal 
c- Acima de 25 e 30 Acima do peso 
d- Acima de 30 obeso*/

var peso = 57;
var altura = 1.58;
var imc = peso / (altura*altura)
    console.log("Seu peso é: "+peso +"kg e sua altura é: "+ altura+"m");
    console.log("Seu IMC é: "+ imc.toFixed(1));

if (imc < 18.5){
    console.log("Você está abaixo do peso");
} else if (imc >= 18.5 || imc < 25) {
    console.log("Seu peso está normal");
} else if (imc >= 25 || imc < 30) {
    console.log ("Você está acima do peso");
} else if (imc >= 30) {
    console.log ("Você está obeso");
}


