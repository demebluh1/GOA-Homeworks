# N1
def is_leap_year(year):
    if year % 400 == 0:
        return True
    elif year % 100 == 0:
        return False
    elif year % 4 == 0:
        return True
    else:
        return False
    
# N2
def repeats(arr):
    total = 0
    for num in arr:
        if arr.count(num) == 1:
            total += num
            
    return total

# N3
def sum_two_smallest_numbers(numbers):
    numbers.sort()
    return numbers[0] + numbers[1]

# N4
def accum(st):
    result = []
    
    for i in range(len(st)):
        result.append(st[i].upper() + st[i].lower() * i)
        
    return "-".join(result)

