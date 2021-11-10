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

//Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem checadas (Respostas da pessoa estudante) e o terceiro é uma função que checa 
//se a resposta está correta e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas
const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const resultTest = (rightAnswers,studentAnswers,counter) => {
  count = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const counterPoints = counter(rightAnswers[index], studentAnswers[index]);
    count += counterPoints;
  }
  return `Resultado final: ${count} corretas`
}

console.log(resultTest(rightAnswers, studentAnswers, (rAnswer, uAnswer) => {
	if (rAnswer === uAnswer) {
	  return 1;
	} if (uAnswer === 'N.A') {
	  return 0;
	}
	return -0.5;
      }));