//Exercício 1 Faça cinco programas, um para cada operação aritmética básica. 
//Seu programa deve ter duas variáveis, a e b , definidas no começo com os 
//valores que serão operados. Faça programas para:

let a = 2205;
let b = 1993;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//Exercício 2 Faça um programa que retorne o maior de dois números.
//Defina no começo do programa duas variáveis com os valores que serão comparados.

let num1 = 0312;
let num2 = 1965;

if(num1>num2){
    console.log(num1);
}
else{
    console.log(num2);}

//Exercício 3 Faça um programa que retorne o maior de três números.
//Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 22
let b = 24 
let c =29

if (a>b && a>c){
    console.log(a);
}
    else if (b>a && b>c){
     console.log(b);
    }
     else{
     console.log(c);
    }

//Exercício 4 Faça um programa que, dado um valor definido numa variável, retorne "positive"
//se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let num = -166

 if (num>0){
     console.log('positive');
 }
    else if (num<0){
        console.log('negative');
    }
    else{
        console.log('zero');
    }

/*Exercício 5 Faça um programa que defina três variáveis com os valores dos três ângulos internos 
de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , 
caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo.*/
let anguloA=60;
let anguloB=60;
let anguloC=60;
let somaAngulos=anguloA+anguloB+anguloC;
let angulosPositivos=anguloA>0 && anguloB>0 && anguloC>0;

if (angulosPositivos){
    if (somaAngulos===180){
        console.log(true);
        }

    else{
        console.log(false);
        }
    }
 else{
     console.log('Error');
 }   

 /*Exercício 6 Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas,
sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)*/
let chess= 'RAINHA'

 switch(chess.toLowerCase()){
     case 'peão':
         console.log('Uma casa para frente');
         break;
    case 'bispo':
        console.log('diagonal');
        break;
    case 'torre':
        console.log('Vertical ou Horizontal');
        break;
    case 'cavalo':
        console.log('em L');
        break;
    case 'rei':
        console.log('uma casa para direção que quiser');
        break;
    case 'rainha':
        console.log('quantas casas quiser para qualquer direção');
        break;
    default:
        console.log('Peça não identificada');
 }

/* Exercício 7 Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.*/
let notaPorcentagem='45'

 if(notaPorcentagem>=90){
     console.log('Nota A');
    }
    else if(notaPorcentagem>=80){
        console.log('Nota B');
    }
     else if(notaPorcentagem>=70){
        console.log('Nota C');
    }
     else if(notaPorcentagem>=60){
        console.log('Nota D');
    }
     else if(notaPorcentagem>=50){
        console.log('Nota E');
    }
else{
        console.log('Nota F');
    }
    

