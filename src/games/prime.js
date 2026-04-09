import runEngine from '../index.js'

const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false
  }
  return true
}

const makeRound = () => {
  const number = getRandomInt(1, 100)
  const question = String(number)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return [question, correctAnswer]
}

export default () => runEngine(taskDescription, makeRound)
