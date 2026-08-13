#N1
# შედარებითი ოპერატორები Python-ში


# 1) ==  (ტოლია)
# print(5 == 5)      # True
# print(3 == 4)      # False
# print('a' == 'a')  # True
# print(10 == 10.0)  # True
# print(True == 1)   # True

# 2) >   (მეტია)
# print(7 > 3)       # True
# print(3 > 7)       # False
# print(5 > 5)       # False
# print(10 > 2.5)    # True
# print('b' > 'a')   # True

# 3) <   (ნაკლებია)
# print(2 < 5)       # True
# print(5 < 2)       # False
# print(5 < 5)       # False
# print(3.4 < 4)     # True
# print('aa' < 'ab') # True

# 4) >=  (მეტია ან ტოლია)
# print(5 >= 3)      # True
# print(3 >= 5)      # False
# print(5 >= 5)      # True
# print(4.0 >= 4)    # True
# print('c' >= 'b')  # True

# 5) <=  (ნაკლებია ან ტოლია)
# print(2 <= 5)      # True
# print(5 <= 2)      # False
# print(5 <= 5)      # True
# print(3.0 <= 3)    # True
# print('a' <= 'a')  # True

#N2

# Logical Operators (ლოგიკური ოპერატორები) Python-ში

# 1) and  -> ლოგიკური "და"
#   - შედეგი არის True მხოლოდ მაშინ, როცა ორივე მხარე True-ა.
#   - სხვა შემთხვევაში შედეგი არის False.
#   - მაგალითი:
#       True and True   => True
#       True and False  => False
#       False and True  => False
#       False and False => False
#   - ხშირად გამოიყენება მრავალი პირობის გასამართად ერთდროულად.

# 2) or   -> ლოგიკური "ან"
#   - შედეგი არის True თუ მინიმუმ ერთი მხარე True-ა.
#   - მხოლოდ მაშინ არის False, როცა ორივე მხარე False-ა.
#   - მაგალითი:
#       True or True    => True
#       True or False   => True
#       False or True   => True
#       False or False  => False
#   - გამოიყენება ერთჯერადი პირობის გასამართად, ანალოგიურად "ან" მეთოდით.


#N3
# AND ოპერატორი - შედეგი True მხოლოდ მაშინ, როცა ორივე მხარე True-ა

print(True and True)       # True
print(5 > 3 and 2 < 4)    # True (ორივე პირობა მართალია)
print("hello" and 1)       # 1  (ორივე truthy, Python აბრუნებს ბოლოსმოქმედს)

# OR ოპერატორი - შედეგი True თუ მინიმუმ ერთი მხარე True-ა

print(True or False)       # True
print(5 < 3 or 2 == 2)    # True (მეორე პირობა მართალია)
print("" or "Python")      # "Python" (პირველი falsy, მეორე truthy)

#N4
# წინასწარ მომზადებული რიცხვი
my_number = 10

# მომხმარებლისგან რიცხვის შემოტანა
user_input = input("შეიყვანეთ რიცხვი: ")

# სტრინგის გადაყვანა integer ტიპში
user_number = int(user_input)

#N5
user_name = input("თქვენი სახელი")
my_name = ("Demetre")
print(my_name == user_name ) #False

#N6
user_age = input("რამდენი წლის ხარ")
my_age = 13
print(user_age == my_age) # False
