#N1
# for loop არის ციკლი, რომელიც იმეორებს კოდს იმდენჯერ,
# რამდენი ელემენტიც არის მოცემულ სიის, სტრიქონის ან სხვა ობიექტის შიგნით.

#N2
# # indentation (ინდენტაცია) არის კოდის თვალსაჩინო ჩაღრმავება — ანუ ზღვარზე
# გაკეთებული რამდენიმე სივრცე (space) ან ტაბი (tab).

#N3
for number in range(0, 68):
    print(number)

#N4
for number in range(12, 88):
    print(number)

#N5
for number in range(4, 99, 2):
    print(number)

#N6
word = input("დაწერეთ ნებისმიერი სიტყვა.")
for letter in word:
    print(letter)

#N7
number = int(input("დაწერეთ ნებისმიერი რიცხვი"))
for i in range(number):
    print(i)
