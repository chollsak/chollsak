sleepy = 0
knowledge = 0

while sleepy < 100:
  print("You are feeling sleepy. Keep staying awake to increase your knowledge!")
  answer = input("What is 2 + 2? ")
  if answer == "4":
    print("Correct! Your knowledge has increased.")
    knowledge += 1
  else:
    print("Incorrect. Try again.")
  
  sleepy += 10
  knowledge -= 1
  
  print("Your current knowledge level is:", knowledge)
  print("Your current sleepiness level is:", sleepy)

print("You are too sleepy to continue. Game over!")