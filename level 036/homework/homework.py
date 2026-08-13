# N1
def square(number):
    # ფუნქცია იღებს ერთ რიცხვს (number)
    
    result = number * number
    # აქ ვანგარიშებთ რიცხვის კვადრატს და ვინახავთ result-ში
    
    return result
    # return აბრუნებს result-ს ფუნქციიდან
    # ამ ხაზზე ფუნქცია სრულდება
x = square(5)
print(x)

# N2
def multiply_list(numbers):
    result = 1

    for num in numbers:
        result = result * num

    return result
my_list = [2, 3, 4, 5]

print(multiply_list(my_list))

# N3
def return_number(num):
    return num

def show_number(x):
    result = return_number(x)
    print(result)

show_number(10)

# N4
def return_number(num):
    return num
def second_function(x):
    return x
result = second_function(return_number(7))
print(result)
