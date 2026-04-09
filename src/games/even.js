import runEngine from '../index.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const generateRound = () => {
  const number = Math.floor(Math.random() * 100) + 1
  const question = String(number)
  const answer = number % 2 === 0 ? 'yes' : 'no'

  return [question, answer]
}

export default () => runEngine(description, generateRound)
