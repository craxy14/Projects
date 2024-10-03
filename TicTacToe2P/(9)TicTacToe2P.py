print("Welcome to my TicTacToe game, Have FUN!")
print("-----------------------------------------")

board = ['-', '-', '-', '-', '-', '-', '-', '-', '-']

#asks players for their numbers
player1 = input("Player name 1: ")
player2 = input("Player name 2: ")

#creates a function wich prints 3 by 3 board!
def dis():
    # Display the tic-tac-toe board
    print('|' + board[0] + '|' + board[1] + '|' + board[2] + '|')
    print('|' + board[3] + '|' + board[4] + '|' + board[5] + '|')
    print('|' + board[6] + '|' + board[7] + '|' + board[8] + '|')
dis()

#checks for all the possible condition for player 1 or player 2 (both vertically and horizontaly)
def check():
    player1 = 'x'
    player2 = 'o'
    if board[0] == board[1] == board[2] == player1 or board[0] == board[1] == board[2] == player2:
        return True
    elif board[3] == board[4] == board[5] == player1 or board[3] == board[4] == board[5] == player2:
        return True
    elif board[6] == board[7] == board[8] == player1 or board[6] == board[7] == board[8] == player2:
        return True
    elif board[3] == board[0] == board[6] == player1 or board[3] == board[0] == board[6] == player1:
        return True
    elif board[1] == board[4] == board[7] == player1 or board[1] == board[4] == board[7] == player1:
        return True
    elif board[2] == board[5] == board[8] == player1 or board[2] == board[5] == board[8] == player2:
        return True
    elif board[0] == board[4] == board[8] == player1 or board[0] == board[4] == board[8] == player2:
        return True
    elif board[2] == board[4] == board[6] == player1 or board[2] == board[4] == board[6] == player2:
        return True
    
    else:
        return False

#asks user to input the position on 3 by 3 board (1-9)
def input_position():
    x = int(input("Enter the position:"))

#if the entered value on the board does not equal to "-" then it already exists so it asks user for value again
    if board[x - 1] != '-':
        print("Value already exists, please enter a new value:")
        return input_position()
    else:
        return x


for i in range(9):
    if i % 2 == 0:
        x = input_position()

        board[x - 1] = 'x'
        dis()
        if check():
            print(player1 + ' wins!')
            break
    else:
        x = input_position()
        board[x - 1] = 'o'
        dis()
        if check():
            print(player2 + ' wins!')
            break

#if there is no winner "Game over" will get printed
else:
    print('Game over!')