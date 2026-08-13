#N1
numbers = [5, 10, 15, 20, 25]

total = 0

for num in numbers:
    total += num

average = total / len(numbers)

print("ჯამი არის:", total)
print("საშუალო არითმეტიკული არის:", average)

#N2
num_1 = int(input("Enter Number:"))
while True:
    if num_1 == 10:
        print("The number you entered is correct!")
        break
    else:
        print("The Number is not correct")
        continue

#N3
while True:
    number = int(input("Enter Number:"))
    if number % 2 == 0:
        print("Your number is even!")
        break
    else:
        print("Your Number is odd.")
        continue

