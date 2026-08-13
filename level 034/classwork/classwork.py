#N1
def greet(name):
    print("Hello World!")
    print(f"Hello {name}")
greet("Demetre")

#N2
def double(number):
    return number ** 2
print(double(4))

#N3
def checkOdd(number):
    if number % 2 == 0:
        return "ლუწი"
    else:
        return "კენტი"
print(checkOdd(10))  # ლუწი
print(checkOdd(7))   # კენტი

#N4
def BMI(height, weight):
    return weight / (height * height)
print(BMI(1.70, 65))
