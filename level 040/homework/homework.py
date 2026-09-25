# N1 codewars ამოცანა
def simple_multiplication(number) :
    if number % 2 == 0:
        return number * 8
    else:
        return number * 9
    

# N2
def is_even(n): 
    return n % 2 == 0

# N3
def basic_op(operator, value1, value2):
    if operator == "+":
        return value1 + value2
    elif operator == "-":
        return value1 - value2
    elif operator == "*":
        return value1 * value2
    elif operator == "/":
        return value1 / value2
    else: 
        return ("Wrong")
    

# N4
def bool_to_word(boolean):
    if boolean == True:
        return("Yes")
    else:
        return("No")
    
# N5
def find_average(numbers):
    return sum(numbers) / len(numbers) if numbers else 0