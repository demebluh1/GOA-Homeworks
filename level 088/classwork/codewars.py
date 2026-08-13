def flick_switch(lst):
    result = True
    output = []
    
    for items in lst:
        if items == "flick":
            result = not result
        output.append(result)
        
    
    return output