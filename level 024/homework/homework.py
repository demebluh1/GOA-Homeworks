#N1
num = int(input("Enter a number: "))

if num > 0:
    if num % 2 == 0:
        print("The number is positive and even.")
    else:
        print("The number is positive and odd.")
elif num < 0:
    print("The number is negative.")
else:
    print("The number is zero.")

#N2
while True:
    num = int(input("Enter a number: "))
    if num < 0:
        print("Negative number entered. Program stopped.")
        
    else:
        print("Positive number")

#N3
correct_pin = "1234"
attempts = 3

while attempts > 0:
    pin = input("Enter PIN: ")
    if pin == correct_pin:
        print("Access Granted")
        
    else:
        attempts -= 1

if attempts == 0:
    print("Access Denied")

#N4
fruits = ["ვაშლი", "ბანანი", "ატამი", "მსხალი", "ალუბალი"]
print(fruits[2])

#N5
numbers = [10, 20, 30, 40, 50]
numbers[1] = 25
print(numbers)

#N6
colors = ["წითელი", "მწვანე", "ლურჯი", "ყვითელი", "იასამნისფერი"]
index = int(input("Enter index (0-4): "))
print(colors[index])

#N7
animals = ["ძაღლი", "კატა", "სპილო", "ვეფხვი", "ლომი"]
animals[-1] = "გემი"
print(animals)
