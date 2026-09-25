#N1
# Custom ფუნქცია არის ფუნქცია, რომელსაც პროგრამისტი თავად ქმნის.
# იგი გამოიყენება კოდის დასალაგებლად, გამეორებადი კოდის თავიდან ასაცილებლად
# და პროგრამის უფრო მარტივად გასაგებად და სამართავად.

#N2
def sum_numbers(a, b):
    return a + b

answer = sum_numbers(5 , 7)
print(answer)

#N3

def check_even(Number):
    if Number % 2 == 0:
        print("Number is even")
    
    else:
        print("Number is odd")

check_even(10)
check_even(7)

#N4

def square_number(number):
    return number * number

result = square_number(6)
print(result)

#N5

def upper_case(text):
    return text.upper()

result = upper_case("Hello, World!")
print(result)

#N6

def info(name, surname):
    print(f"Your name is {name}, {surname}")
info("Demetre", "Gelashvili")