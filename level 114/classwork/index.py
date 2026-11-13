# N1
def maskify(cc):
    if len(cc) <= 4:
        return cc
    else:
        return "#" * (len(cc) - 4) + cc[-4:]


# N2
def persistence(n):
    count = 0
    while n >= 10:
        nigger = 1
        for digit in str(n):
            nigger *= int(digit)
        n = nigger
        count += 1
    return count

# N3
def solution(s):
    if len(s) % 2 != 0:
        s += "_"
    return [s[i:i+2] for i in range(0, len(s), 2)]

# N4
def to_jaden_case(string):
    return " ".join(word.capitalize() for word in string.split())