//Exercício 1
let a = 2205;
let b = 1993;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//Exercício 2
let num1 = 0312;
let num2 = 1965;

if(num1>num2){
    console.log(num1);
}
else{
    console.log(num2);
}

//Excercício 3
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

 //Exercício 4
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


//Exercício 5
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


 //Exercicio 6
 let chess='Rainha'

 switch(chess){
     case 'peão'&&'Peão':
         console.log('Uma casa para frente');
         break;
    case 'Bispo'&&'bispo':
        console.log('diagonal');
        break;
    case 'torre'&&'Torre':
        console.log('Vertical ou Horizontal');
        break;
    case 'cavalo'&&'Cavalo':
        console.log('em L');
        break;
    case 'rei'&&'Rei':
        console.log('uma casa para direção que quiser');
        break;
    case 'rainha' && 'Rainha':
        console.log('quantas casas quiser para qualquer direção');
        break;
    default:
        console.log('Peça não identificada');
 }

 //Eexercício 7
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

//Exercício 8
let num1=10;
let num2=11;
let num3=5;

if((num1%2==0)||(num2%2==0)||(num3%2==0)){
    console.log(true);
}
else{
    console.log(false);
}

//Exercício 9
let num1=10;
let num2=14;
let num3=16;

if((num1%2!=0)||(num2%2!=0)||(num3%2!=0)){
    console.log(true);
}
else{
    console.log(false);
}

//Exercício 10
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

//Exercício 11
let salarioBruto= 1032.00;
let salarioBase
let salarioLiquido

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





