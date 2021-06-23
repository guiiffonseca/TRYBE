//Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . 
//A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
const generateEmail =(fullName) => {
  let email = fullName.toLowerCase().split(' ').join('_');
  return `${email}@trybe.com`
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), 
    id2: callback('Luiza Drumond'), 
    id3: callback('Carlos Paiva'),
  }
  return employees;
};

console.log(newEmployees(generateEmail));

// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. 
//O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
const checker = (myNumer,number) => myNumer === number
const result = (myNumer,callback) => {
 const number = Math.floor(Math.random()*5)+1;
 return callback(myNumer,number) ? 'Parabéns você ganhou' : 'Tente Novamente'
 
}
console.log(result(3,checker));