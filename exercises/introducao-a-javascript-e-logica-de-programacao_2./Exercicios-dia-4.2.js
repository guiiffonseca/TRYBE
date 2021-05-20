let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 1-Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

console.log(numbers);

//Exercício 2- Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
 
let soma=0;
for(let index=0; index < numbers.length; index+=1){
    soma+=numbers[index];
}
console.log(soma);