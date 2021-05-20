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

//Exercício 8 Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
//Bonus: use somente um if.
let num1=10;
let num2=11;
let num3=5;

if((num1%2==0)||(num2%2==0)||(num3%2==0)){
    console.log(true);
}
else{
    console.log(false);
}

//Exercício 9 Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
//Bonus: use somente um if.
let num1=10;
let num2=14;
let num3=16;

if((num1%2!=0)||(num2%2!=0)||(num3%2!=0)){
    console.log(true);
}
else{
    console.log(false);
}

/*Exercício 10 Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)*/
let custoProduto=10;
let valorVenda=15;

let custoTotal= (custoProduto*0,2)+custoProduto;

let lucro= valorVenda-custoTotal;
let quantidadeVendida=1000;

let lucroTotal=lucro*quantidadeVendida;

if(custoTotal&&valorVenda<0){
    console.log('error');
}
else{
console.log(lucroTotal);
}

/* Exercício 11 A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. 
Para as faixas de impostos, use as seguintes referências:


INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88


IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.*/

let salarioBruto= 1032.00;
let salarioBase;
let salarioLiquido;

//SALÁRIO BASE (INSS DESCONTADO)
if(salarioBruto<=1556.94){
    console.log(salarioBase=salarioBruto-(salarioBruto*0.08));
}
    else if(salarioBruto>1556.94 && salarioBruto<=2594.92){
        console.log(salarioBase=salarioBruto-(salarioBruto*0.09));
    }
    else if(salarioBruto>2594.92 && salarioBruto<=5189.82){
        console.log(salarioBase=salarioBruto-(salarioBruto*0.11));
    }
    else if(salarioBruto>5189.82 && salarioBruto<=2594.92){
        console.log(salarioBruto-570.88);
    }
//DEDUÇÃO IR
if(salarioBase<=1903.98){
    console.log(salarioBase);
    console.log('isento');
}
    else if(salarioBase>1903.98 && salarioBase<2826.65){
    console.log(salarioLiquido=salarioBase-(salarioBase*0.075));
    console.log('Parcelas 142.80');
    }
     else if(salarioBase>2826.65 && salarioBase<3751.05){
    console.log(salarioLiquido=salarioBase-(salarioBase*0.15));
    console.log('Parcelas 354.80');
    }
     else if(salarioBase>3751.05 && salarioBase<4664.68){
    console.log(salarioLiquido=salarioBase-(salarioBase*0.225));
    console.log('Parcelas 636.13');
    }
     else if(salarioBase>4664.68){
    console.log(salarioLiquido=salarioBase-(salarioBase*0.275));
    console.log('Parcelas 869.36');
    }



    

