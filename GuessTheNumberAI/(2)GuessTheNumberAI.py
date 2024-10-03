import random

print("Hello, Welcome to my Guess The Number Game, where you have to guess an AI's Number, Good Luck!")

print("------------------------------------------------------------------------------------------------")

#makes user input for the range they want to guess a number
user_range = int(input("Enter the range you want to guess with in: "))

print(f'You are guessing a number beetwen {1} and {user_range}, Good Luck!')


#generates a number between a specific range
number = random.randint(1 , user_range)

guess = 0
count = 0

#creates a loop while number does not equal to users guess 
while guess != number:
    guess = int(input("Enter your guess: "))
    if guess < number:
        print("Try again, Too low!")
    elif guess > number:
        print("Try again, Too high!")
    count += 1

    if count == 9:
        print(number)

print("Attempts needed:",count)
print(f"Congatulation! You succesfully guessed the number {number}!")