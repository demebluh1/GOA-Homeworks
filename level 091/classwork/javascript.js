// codewars ამოცანები:

// N1:
function sumArray(array) {
    if (array == null || array.length <= 1) {
        return 0
    }

    array.sort(function(a, b) {
        return a - b
    });

    let sum = 0

    for (let i = 1; i < array.length - 1; i++) {
        sum += array[i]
    }

    return sum
}

// N2:
var number=function(array){
    let result = []
    
    for (let i = 0; i < array.length; i++){
      result.push((i + 1 ) + ": " + array[i])
}

    return result
  }