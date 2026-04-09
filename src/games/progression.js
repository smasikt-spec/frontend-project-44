import runEngine from '../index.js'

const description = 'What number is missing in the progression?'

// Простая функция для получения случайного числа
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const getRoundData = () => {
  const start = getRandomInt(1, 20)
  const step = getRandomInt(2, 5)
  const length = getRandomInt(5, 10)
  const hiddenIndex = getRandomInt(0, length - 1)

  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i)
  }

  const answer = String(progression[hiddenIndex])
  progression[hiddenIndex] = '..'
  const question = progression.join(' ')

  return [question, answer]
}

export default () => runEngine(description, getRoundData)
