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