#N1
# .append() ფუნქცია გამოიყენება სიის ბოლოში ახალი ელემენტის დასამატებლად
# მაგალითად: list.append(ელემენტი)

# .insert() ფუნქცია გამოიყენება სიის კონკრეტულ ინდექსზე ელემენტის ჩასამატებლად
# მაგალითად: list.insert(ინდექსი, ელემენტი)

# .pop() ფუნქცია გამოიყენება სიის ელემენტის წასაშლელად ინდექსის მიხედვით
# თუ ინდექსი არ მივუთითეთ, შლის ბოლო ელემენტს
# მაგალითად: list.pop() ან list.pop(ინდექსი)

#N2
items = ["apple", "banana", "orange", "grape"]

print(len(items))

#N3
numbers = []

for i in range(5):
    num = int(input("შეიყვანეთ რიცხვი: "))
    numbers.append(num)

print(numbers)

#N4
colors = ["red", "green", "blue", "yellow", "purple"]

colors.pop()

print(colors)

#N5
animals = ["dog", "cat", "elephant", "lion"]

animals.insert(1, "monkey")

print(animals)

#N6
students = []

for i in range(3):
    name = input("შეიყვანეთ სტუდენტის სახელი: ")
    students.append(name)

students.insert(0, "Teacher")

students.pop()

print(len(students))

print(students)
