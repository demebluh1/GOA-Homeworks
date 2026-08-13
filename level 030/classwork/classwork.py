#N1
name = input("Enter your name")
print(name.upper())
#N2
print(name.lower())
print(name.capitalize())
#N3

word = "academy"

char = input("შეიყვანე სიმბოლო: ")

index = word.find(char)

if index == -1:
    print("This symbol is not in word")
else:
    print(f"{char} - {index}")

#N5
second_name = "Demetre"
print(len(second_name))

#N6
name = input("შეიყვანე სახელი: ")

if name.startswith("g"):
    print("სახელი იწყება ასო-ბგერა 'g'-თი")
else:
    print("სახელი არ იწყება ასო-ბგერა 'g'-თი")

#N7
name_d = input("Enter your name")

if name.endswith("l"):
    print("Your name ends with l")
else:
    print("Your name doesnt end with l")