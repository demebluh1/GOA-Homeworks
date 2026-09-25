# N1
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

nums.extend([11, 12, 13, 14, 15, 16, 17, 18, 19, 20])

nums.pop()
nums.pop()
nums.pop()
nums.pop()
nums.pop()


print(nums)

# N2
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

nums.extend([11, 12, 13, 14, 15, 16, 17, 18, 19, 20])

nums.remove(16)
nums.remove(17)
nums.remove(18)
nums.remove(19)
nums.remove(20)

print(nums)

# N3
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

nums.insert(5, 100)
nums.insert(6, 101)
nums.insert(7, 102)
nums.insert(8, 103)
nums.insert(9, 104)
nums.insert(10, 105)
nums.insert(11, 106)
nums.insert(12, 107)
nums.insert(13, 108)
nums.insert(14, 109)

nums.remove(100)
nums.remove(101)
nums.remove(102)
nums.remove(103)
nums.remove(104)

nums.pop()
nums.pop()
nums.pop()
nums.pop()
nums.pop()

print(nums)

# N4
colors = ["red", "green", "blue", "yellow", "purple"]

colors.pop()

print(colors)

# N5
num = [10, 20, 30, 40]

num.append(50)

print(num)