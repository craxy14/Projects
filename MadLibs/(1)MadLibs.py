print("Hello, Welcome to my Mad Libs game, where you have to guess 3 correct word from this verbs:")
words = ["Skydive" , "Good" , "Amazing" , "Purple" , "Smartest" , "Best" , "Nika" ,]
print(words)

print("-----------------------------------------------------------------------------------------------")
#creates a sentance and adds 3 placeholder format strings
sentence = "Goal-Oriented Academy is the {word1} academy in the world! Name of GOA's CEO is {word2}, He's the {word3} guy I know! \n"

print(sentence)


#creates a loop till users entered words does not match the correct words
while True:
    word1 = input("Enter a Verb for Word No1: ").lower()
    word2 = input("Enter a Verb for Word No2: ").lower()
    word3 = input("Enter a Verb for Word No3: ").lower()


# checks if the input words match the expected words
    if word1 != "best" or word2 != "nika" or word3 != "smartest":
        print("Try again")

    else:
        print("")
        print("Congratulations! You guessed all 3 verbs correctly!! \n")

#changes the values of format placeholders in sentance variable and makes them capitalize
        filled_sentence = f"Goal-Oriented Academy is the {word1.capitalize()} academy in the world! Name of GOA's CEO is {word2.capitalize()}, He's the {word3.capitalize()} guy I know!"

#prints the correct filled sentance 
        print(filled_sentence , "\n")
        break
