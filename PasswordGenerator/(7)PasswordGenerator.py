import random

print("Welcome to Password Generator!")

print("--------------------------------")

#generates a password from this characters
char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789[];'&@$"

#asks user a length of his password
length = int(input("Enter your password lenght: "))


#creates a loop till user wants to exit!
i = 0
while True:
    accept = input("Accept to generate password (y | n): ").lower()
    if accept == "y":
        random_list = random.choices(char , k=length)
        password = "".join(random_list)
        print(password)
    else:
        print("See you later aligator :)")
        break