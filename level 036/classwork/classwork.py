# N1
def five_number_sum(a, b, c, d, e):
    average = (a + b + c + d + e) / 5
    print(average)

five_number_sum(10, 20, 30, 40, 50)

# N2

def sayHi(name = "Guest"):
    print(f"Hello {name}")

sayHi("Demetre")
sayHi()

# N3
def toUpper(name = "Guest"):
    return name.upper()

print(toUpper("demetre"))
print(toUpper())