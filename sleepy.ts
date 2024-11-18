let sleepy: number = 0;
let knowledge: number = 0;

const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

while (sleepy < 100) {
  console.log("You are feeling sleepy. Keep staying awake to increase your knowledge!");

  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const correctAnswer = num1 + num2;

  const answer: string | null = prompt(`What is ${num1} + ${num2}?`);

  if (answer === correctAnswer.toString()) {
    console.log("Correct! Your knowledge has increased.");
    knowledge += 1;
  } else {
    console.log("Incorrect. Try again.");
  }

  sleepy += 10;
  knowledge -= 1;

  console.log("Your current knowledge level is:", knowledge);
  console.log("Your current sleepiness level is:", sleepy);
}

console.log("You are too sleepy to continue. Game over!");
