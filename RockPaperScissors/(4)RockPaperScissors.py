import random

print("Hello, welcome to my | Rock | Paper | Scissors | game, Good Luck!")
print("-------------------------------------------------------------------")

options = ["Rock", "Paper", "Scissors"]

username = input("Enter your name to start playing: ")
username = username.capitalize()


ai_score = 0
user_score = 0

while True:
        #ai's Choice:
    ai = random.choice(options)
    ai = ai.lower()

        #user's choice:
    user_input = input("(exit) / (score) | Please choose: Rock / Paper / Scissors: ")
    user_input = user_input.lower()


    if ai == "rock" and user_input == "scissors":
        print("AI Won. :(")
        ai_score += 1

    elif ai == "rock" and user_input == "paper":
        print(username , "Won! :)")
        user_score += 1

    elif ai == "rock" and user_input == "rock":
        print("Tie!")

    elif ai == "paper" and user_input == "scissors":
        print(username , "Won! :)")
        user_score += 1

    elif ai == "paper" and user_input == "rock":
        print("AI Won. :(")
        ai_score += 1

    elif ai == "paper" and user_input == "paper":
        print("tie")

    elif ai == "scissors" and user_input == "rock":
        print(username , "Won! :)")
        user_score += 1

    elif ai == "scissors" and user_input == "paper":
        print("AI Won. :(")
        ai_score += 1

    elif ai == "scissors" and user_input == "paper":
        print("Tie!")

    if user_input == "exit":
        break

    elif user_input == "score":
        print("Ai:" , ai_score , "|" , username + ":" , user_score)