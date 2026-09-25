# 2)
number = 12

if number > 10:
    print("more than 10")
else:
    print("less than 10")

# 3)
num = int(input("Enter a number: "))

if num == 15:
    print("equal to 15")
else:
    print("not equal to 15")

# 4)
text = input("Enter a string: ")

if text == "group84":
    print("you are correct")
else:
    print("you are wrong")

# 5)
for i in range(50, 101, 5):
    print(i)

# 6)
for i in range(1):
    print("Demetre Gelashvili")

# for
for i in range(0, 100):
    print(i)

# while
i = 0
while i < 100:
    print(i)
    i += 1

# for
for i in range(0, 101):
    print(i)

# while
i = 0
while i <= 100:
    print(i)
    i += 1

# for
for i in range(0, 101):
    print(i)

# while
i = 0
while i <= 100:
    print(i)
    i += 1

# for
for i in range(10, 21):
    print(i)

# while
i = 10
while i <= 20:
    print(i)
    i += 1

# for
for i in range(100, 201, 5):
    print(i)

# while
i = 100
while i <= 200:
    print(i)
    i += 5

# for
for i in range(10, -1, -1):
    print(i)

# while
i = 10
while i >= 0:
    print(i)
    i -= 1

# 13)
num = float(input("Enter a number: "))

if num > 0:
    print("ეს რიცხვი დადებითი რიცხვია")
elif num < 0:
    print("ეს რიცხვი უარყოფითი რიცხვია")
else:
    print("ეს რიცხვი ნულია")

# 14)
age = int(input("Enter your age: "))

if age < 0:
    print("არასწორი ინფო")
elif age <= 12:
    print("ბავშვი ხარ")
elif age <= 19:
    print("მოზარდი/თინეიჯერი ხარ")
elif age <= 64:
    print("ზრდასრული ხართ")
elif age <= 120:
    print("ხანში შესული ხართ")
else:
    print("გურუ ან ჯადოქარი")

# 15)
a = float(input("Enter first number: "))
b = float(input("Enter second number: "))
c = float(input("Enter third number: "))

print("Largest number is:", max(a, b, c))

# 16)
day = int(input("Enter a number (1-7): "))

if day == 1:
    print("ორშაბათი")
elif day == 2:
    print("სამშაბათი")
elif day == 3:
    print("ოთხშაბათი")
elif day == 4:
    print("ხუთშაბათი")
elif day == 5:
    print("პარასკევი")
elif day == 6:
    print("შაბათი")
elif day == 7:
    print("კვირა")
else:
    print("არ ვიცი ეგ რა დღეა")


# 17)
num = int(input("Enter a number: "))

if num > 50:
    print(num * 5)
else:
    print(num ** 2)

# 18)
password = input("Enter password: ")

if password == "goa123":
    print("Password is correct!")
else:
    print("Incorrect password!")

# 19)
num = int(input("Enter a number: "))

total = 0
for i in range(1, num + 1):
    total += i

print("Sum is:", total)
