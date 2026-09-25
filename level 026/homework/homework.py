# N1
numbers = [3, 7, 2, 9, 4]

# 1.1 ყველა ელემენტის დაბეჭდვა
for n in numbers:
    print(n)

# 1.2 ელემენტების ჯამი
total = 0
for n in numbers:
    total += n

print("ჯამი:", total)

# N2
numbers = [1, 2, 4, 7, 10, 13]
count_even = 0

for n in numbers:
    if n % 2 == 0:
        count_even += 1

print("ლუწი რიცხვების რაოდენობა:", count_even)

# N3
numbers = [5, 2, 9, 1, 7]

min_num = numbers[0]
max_num = numbers[0]

for n in numbers:
    if n < min_num:
        min_num = n
    if n > max_num:
        max_num = n

print("უმცირესი:", min_num)
print("უდიდესი:", max_num)

# N4
numbers = [1, 2, 3, 4, 5, 6, 7]

for n in numbers:
    
    if n % 2 != 0:
        
        print(n)
        

# N5
total = 0

while True:
    num = int(input("შეიყვანე რიცხვი: "))
    if num == 0:
        break
    total += num

print("ჯამი:", total)

# N6
while True:
    num = int(input("შეიყვანე რიცხვი: "))
    if num < 0:
        break

# N7
while True:
    num = int(input("შეიყვანე რიცხვი: "))
    if num % 5 == 0:
        break

# N8
attempts = 0

while True:
    num = int(input("შეიყვანე რიცხვი: "))
    attempts += 1
    if num % 2 == 0:
        break

print("მცდელობების რაოდენობა:", attempts)

# N10
while True:
    num = int(input("შეიყვანე რიცხვი: "))
    if num % 2 != 0:
        break

# N11
while True:
    num = int(input("შეიყვანე რიცხვი: "))

    if num < 0:
        continue
    if num == 0:
        break

    print("შეყვანილი რიცხვი:", num)

# N12
while True:
    num = int(input("შეიყვანე რიცხვი: "))

    if num < 0:
        continue
    if num == 100:
        break

    print("მიღებულია:", num)
