import runEngine from '../index.js'

const objective = 'What is the result of the expression?'

const makeRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const computeValue = (first, second, operation) => {
  switch (operation) {
    case '+': return first + second
    case '-': return first - second
    case '*': return first * second
    default:
      throw new Error(`Unexpected operation: ${operation}`)
  }
}

const generateStep = () => {
  const leftOperand = makeRandomValue(1, 25)
  const rightOperand = makeRandomValue(1, 10)
  const mathSigns = ['+', '-', '*']
  const activeSign = mathSigns[makeRandomValue(0, mathSigns.length - 1)]

  const challenge = `${leftOperand} ${activeSign} ${rightOperand}`
  const result = computeValue(leftOperand, rightOperand, activeSign)

  return [challenge, String(result)]
}

export default () => runEngine(objective, generateStep)
