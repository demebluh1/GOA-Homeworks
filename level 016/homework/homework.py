#N1
print(5 > 3)              # True
print(10 == 10)           # True
print(4 < 9 and 2 < 5)    # True
print(7 != 3)             # True

print(8 < 3)              # False
print(5 == 9)             # False
print(4 > 10 or 2 > 8)    # False
print(7 <= 6)             # False

#N2
# Sequencing (სიქვენსინგი)
# ნიშნავს რომ პროგრამაში ბრძანებები სრულდება ზუსტად იმ რიგით, როგორც წერია.
# ზემოდან ქვემოთ, ნაბიჯ-ნაბიჯ. არაფერს არ აცილებს და არ ცვლის მიმდევრობას.

# Iteration (იტერაცია)
# ნიშნავს რომ  კოდი მეორდება ბევრჯერ.
# მაგალითად for ან while ციკლი, რომელიც რაღაც მოქმედებას აკეთებს რამდენჯერმე.

# Selection (სელექშენი)
# ნიშნავს არჩევანს პროგრამაში — როცა კოდი შესაძლებელია წავიდეს სხვადასხვა გზით.


#N3
x = 5      
y = 10       
z = x + y    
print(z)

#N4
# For loop (for ციკლი)
# For loop-ის მეშვეობით შეგვილია ადვილად დავწეროთ ერთი და იგივე კოდი
# მაგალითად:
for i in range(5): # ეს კოდი დაპრინტავს Hello-ს 5-ჯერ
    print("Hello")

#N5
# range() ფუნქცია
# range() იღებს რიცხვებს და ამ რიცხვების მიხედვით ქმნის რიცხვების მიმდევრობას.
# მაგალითები
# 1)
for i in range(5):
    print(i)

# 2)
for i in range(2, 20):
    print(i)

# 3)
for i in range(5, 100, 5):
    print(i)


#N6
for i in range(5):
    print("BMW E34")

#N7
for i in range(100):
    print("Gelashvili")

#N8
for i in range(46):
    print("Red")

#N9
for i in range(32):
    print("D")

#N10
str1 = input("შემოიყვანე პირველი სტრინგი: ")
str2 = input("შემოიყვანე მეორე სტრინგი: ")
str3 = input("შემოიყვანე მესამე სტრინგი: ")

num = int(input("შემოიყვანე ერთი რიცხვი: "))

num_str = str(num)

result = str1 + str2 + str3 + num_str

print("კონკატინაციის შედეგი არის:", result)

#N11
variable1 = type(str("Hello World"))
print(variable1)

variable2 = type(int(10))
print(variable2)

variable3 = type(float(10.5))
print(variable3)

variable4 =type(bool(True and True))
print(variable4)

#N12
num1 = float(input("შემოიყვანეთ პირველი რიცხვი"))
num2 = float(input("შემოიყვანეთ მეორე რიცხვი"))
num3 = float(input("შემოიყვანეთ მესამე რიცხვი"))
num4 = float(input("შემოიყვანეთ მეოთხე რიცხვი"))

sum = (num1 + num2 + num3 + num4)

print(sum)
