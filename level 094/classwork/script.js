// 1

function findSmallestInt(arr) {
  let smallest = arr[0]
  
  for (let num of arr) {
    if (num < smallest){
        smallest = num
    }
  }
  return smallest
}

// N2
function getCount(str) {
  let count = 0

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++
    }
  }

  return count
}