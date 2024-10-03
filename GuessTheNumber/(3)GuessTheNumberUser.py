import random

print("Hello, welcome to my Guess The Number game, where you have to guess an AI's number, Good Luck!")
print("------------------------------------------------------------------------------------------------")

range = int(input("Enter the range you want AI to guess with in: "))

low = 1
high = range

answer = ""

#creates a loop till answer does not equal to "c" / correct, 
while answer != "c":
    guess = random.randint(low , high)

#creates an input wich asks user if AI's number is too high / too low, or correct!
    answer = input(f"Is {guess} the correct number? | (H = Too High) (L = Too Low) (C = Correct): ").lower()

#if user's answer equals to "h" / too high | our max range will decrese by 1
    if answer == "h":
        high = guess - 1
    
#if user's answer equals to "l" / too low | our min range will incrise by 1
    elif answer == "l":
        low = guess + 1


print(f"Unfortunately AI guessed your number {guess}! :(")