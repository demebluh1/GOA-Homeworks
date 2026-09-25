#N1
arr = ["Demetre", "gia", 12, 14, False, "Davit", "Lado"]
print(len(arr))

#N2
names = ["Giorgi", "Nika", "Luka", "Saba", "Dato"]

new_name = input("შეიყვანე სახელი: ")

names.append(new_name)

print(names)

#N3
names.insert(3, "Tarieli")

#N4
names.pop(4)
print(names)

#N5
names.remove("Saba")
print(names)

#N6
names = ["Giorgi", "Nika", "Luka", "Saba", "Dato"]

user_name = input("შეიყვანე სახელი: ")

if user_name in names:
    index = names.index(user_name)
    print(f"სახელი სიაშია და დგას {index}-ე ინდექსზე")
else:
    print("not index in list")

#N7
numbers = [1, 2, 3, 4, 5]

for i in range(5):
    num = int(input("შეიყვანე რიცხვი: "))
    numbers.append(num)

print(numbers)

#N8
# 1) ცარიელი სია და 5-ის დამატება
lst = []
lst.append(5)

# 2) [1,2,3]-ში 4-ის დამატება
lst2 = [1, 2, 3]
lst2.append(4)

# 3) ჩემი სახელის დამატება
lst.append("Demetre")

# 4) ორი ელემენტის ზედიზედ დამატება
lst.append(1)
lst.append(2)

# 5) "apple"-ის დამატება
lst.append("apple")

# 6) True-ის დამატება
lst.append(True)

# 7) 0-ის დამატება
lst.append(0)

# 8) "Python"-ის დამატება
lst.append("Python")

# 9) "end"-ის დამატება
lst.append("end")

# 10) ნებისმიერი რიცხვის დამატება
lst.append(99)

# 11) ბოლო ელემენტის წაშლა
lst.pop()

# 12) [1,2,3]-დან ბოლო ელემენტის წაშლა
lst3 = [1, 2, 3]
lst3.pop()

# 13) წაშლილი ელემენტის შენახვა ცვლადში
removed_item = lst.pop()

# 14) მეორე ელემენტის წაშლა (index 1)
lst.pop(1)

# 15) პირველი ელემენტის წაშლა
lst.pop(0)

# 16) ცარიელი სიის შემოწმება pop-მდე
empty_list = []
if len(empty_list) > 0:
    empty_list.pop()

# 17) "apple"-ის წაშლა ინდექსით
apple_index = lst.index("apple")
lst.pop(apple_index)

# 18) 10-ე ინდექსის შემოწმება და წაშლა
if len(lst) > 10:
    lst.pop(10)

# 19) წაშლილი ელემენტის დაბეჭდვა
print(removed_item)

# 20) pop-ის შემდეგ სიის დაბეჭდვა
print(lst)

# 21) "apple"-ის ინდექსის პოვნა
if "apple" in lst:
    print(lst.index("apple"))

# 22) რიცხვი 5-ის ინდექსი
print(lst.index(5))

# 23) "Python"-ის ინდექსი
print(lst.index("Python"))

# 24) პირველი ელემენტის ინდექსი
print(0)

# 25) ბოლო ელემენტის ინდექსი
print(len(lst) - 1)

# 26) "cat"-ის ინდექსი
if "cat" in lst:
    print(lst.index("cat"))

# 27) ინდექსის შენახვა ცვლადში
python_index = lst.index("Python")

# 28) მოძებნილი ინდექსის დაბეჭდვა
print(python_index)

# 29) რიცხვი 0-ის ინდექსი
print(lst.index(0))

# 30) "hello"-ს ინდექსი
if "hello" in lst:
    print(lst.index("hello"))

# 31) რიცხვი 10 პირველ პოზიციაზე
lst.insert(0, 10)

# 32) "hi" მეორე პოზიციაზე
lst.insert(1, "hi")

# 33) "start" ინდექს 0-ზე
lst.insert(0, "start")

# 34) "middle" სიის შუაში
lst.insert(len(lst)//2, "middle")

# 35) "end" ბოლო ინდექსზე
lst.insert(len(lst), "end")

# 36) 100 ინდექს 1-ზე
lst.insert(1, 100)

# 37) "Python" ინდექს 2-ზე
lst.insert(2, "Python")

# 38) True ინდექს 0-ზე
lst.insert(0, True)

# 39) False ინდექს 3-ზე
lst.insert(3, False)

# 40) "new" ნებისმიერ ადგილას
lst.insert(2, "new")

# 41) სიის სიგრძე
length = len(lst)

# 42) სიის სიგრძის დაბეჭდვა
print(length)

# 43) len-ის შენახვა ცვლადში
list_length = len(lst)

# 44) სია ცარიელია თუ არა
print(len(lst) == 0)

# 45) სიგრძე მეტია თუ არა 5-ზე
print(len(lst) > 5)

# 46) რამდენი ელემენტია სიაში
print("სიაში არის", len(lst), "ელემენტი")

# 47) 3 ელემენტიანი სია
a = [1, 2, 3]
print(len(a))

# 48) ელემენტის დამატება
a.append(4)
print(len(a))

# 49) ელემენტის წაშლა
a.pop()
print(len(a))

# 50) len([1,2,3])
print(len([1, 2, 3]))
