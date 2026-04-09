import runEngine from '../index.js'

const taskInfo = 'Find the greatest common divisor of given numbers.'

const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const calculateGcd = (first, second) => {
  let a = first
  let b = second
  while (b !== 0) {
    a %= b;
    [a, b] = [b, a]
  }
  return a
}

const getGameRound = () => {
  const number1 = getRandomValue(1, 100)
  const number2 = getRandomValue(1, 100)

  const challenge = `${number1} ${number2}`
  const correctAnswer = calculateGcd(number1, number2)

  return [challenge, String(correctAnswer)]
}

export default () => runEngine(taskInfo, getGameRound)
