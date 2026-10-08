// N1
var number=function(array){
  let result = []
  let lineNum = 1
  
  for (let line of array) {
    result.push(lineNum + ": " + line);
    lineNum++
  }
  return result
}

// N2
function sumStr(a,b) {
  let num1 = Number(a)
  let num2 = Number(b)
  let sum = num1 + num2;
  return String(sum)
}

// N3
function getGrade (s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3;
  
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
} else {
  return "F";} 
}

// N4
function grader(score) {
  if (score > 1 || score < 0.6) {
    return "F";
  } else if (score >= 0.9) {
    return "A";
  } else if (score >= 0.8) {
    return "B";
  } else if (score >= 0.7) {
    return "C";
  } else if (score >= 0.6) {
    return "D";
  }
}