let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 1-Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

console.log(numbers);

//Exercício 2- Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
 let soma=0;

for(let index=0; index < numbers.length; index+=1){
    soma+=numbers[index];
}
console.log('A soma é igual a ' +soma);

//Exercício 3- Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
let media=0

media=soma/numbers.length;
console.log('a média é '+media);

//Exercicio 4-Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, 
//imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if(media>20){
    console.log('Valor é maior que 20');
}
else{
    console.log('Valor menor ou igual a 20');
}

//Exercício 5-Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maiorValor=numbers[0]

 for(let index=0; index<numbers.length; index+=1){
      if(numbers[index]>maiorValor){;
      maiorValor=numbers[index];
     }
 }
  console.log('O maior valor é '+ maiorValor);
    
