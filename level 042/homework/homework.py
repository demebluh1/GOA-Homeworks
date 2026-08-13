# code wars ამოცანები
# N1
def remove_exclamation_marks(s):
    return s.replace('!', '')

# N2
def zeroFuel(distance_to_pump, mpg, fuel_left):
    return distance_to_pump <= mpg * fuel_left

# N3
def distinct(seq):
    result = []
    for num in seq:
        if num not in result:
            result.append(num)
    return result

# N4
def whose_move(last_player, win):
    if win:
        return last_player
    else:
        if last_player == "white":
            return "black"
        else:
            return "white"
        
# N5
def bmi(weight, height):
    value = weight / (height ** 2)
    
    if value <= 18.5:
        return "Underweight"
    elif value <= 25.0:
        return "Normal"
    elif value <= 30.0:
        return "Overweight"
    else:
        return "Obese"