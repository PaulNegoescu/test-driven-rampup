function avgOfThreeNumbers(a, b, c) {
  return (Number(a) + Number(b) + Number(c)) / 3;
}

function maxOfTwoNumbers(a, b) {
  let m;
  
  m = b;
  if(a > b){
    m = a;
  }
   
  return m;
}

function isStudentPassing(x, y, z) {
  const res = media(x, y, z);
  return res >= 7;
}

function maxOfThreeNumbers(a, b, c) {
  let max = a;
  
  if (max < b){
    max = b;
  }
  
  if (max < c){
    max = c;
  }
  
  return max;
}

function maxOfList(list) {
  let i = 0;
  let max = -Infinity;
  
  while(i < list.length) {
    if (max < list[i]) {
      max = list[i];
    }
    
    i++;
  }
  
  return max;
}

function computeFactorial(num) {
  let prod = 1;
  
  for(let i = 1; i <= num; i++) {
    prod = prod * i;
  }
  
  return prod;
}

module.exports = {
  avgOfThreeNumbers,
  maxOfTwoNumbers,
  isStudentPassing,
  maxOfThreeNumbers,
  maxOfList,
  computeFactorial
}