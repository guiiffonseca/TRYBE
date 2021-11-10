
/*let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

 console.log('Bem vinda, '+info.personagem+'!');

  //EX 2
  info.recorrente='Sim';
  console.log(info);

  //EX 3
  for(let key in info){
      console.log(key);
  }
//EX 4
for(let key in info){
      console.log(info[key]);


//EX 5
let info2= {
     personagem: 'Tio Patinhas',
    origem:['Tio Patinhas', 'Christmas on Bear Mountain',"Dell's Four Color Comics #178"],
    nota:'O último MacPatinhas',
    recorrente:'Sim',
  };
  console.log(info.personagem + ' e ' + info2.personagem);
  console.log(info.origem + ' e ' + info2.origem);
  console.log(info.nota+ 'e '+ info2.nota);
  console.log('Ambos recorrentes');*/
  
//Exercícios Funções
//EX 1 
/*
function palindromo(string){
  let reverseLetter='';
  for(let index=string.length-1; index>=0; index-=1){

  reverseLetter+=string[index];
}
  

 if(reverseLetter==string){
    console.log(true);
  }
  else{
    console.log(false);
  }

}

palindromo('arara');*/

//Ex 2

function biggestIndex(number){
  let highestNumber=0
  for(let index in number){
    if(number[highestNumber]<number[index]){
      highestNumber=index;
    }
  }
  return highestNumber;
}
console.log(biggestIndex([2, 3, 6, 7, 10, 1]))