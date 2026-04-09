import readlineSync from 'readline-sync'

const ROUNDS_LIMIT = 3

const runGame = (taskDescription, getLevelData) => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log(taskDescription)

  for (let round = 0; round < ROUNDS_LIMIT; round += 1) {
    const [question, rightAnswer] = getLevelData()
    console.log(`Question: ${question}`)
    const playerAnswer = readlineSync.question('Your answer: ')

    if (playerAnswer !== String(rightAnswer)) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
    console.log('Correct!')
  }

  console.log(`Congratulations, ${userName}!`)
}

export default runGame
