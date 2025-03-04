const alternateDigitSum  = (n) => {
  const arr = `${ n }`.split('')
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
  
    if(i % 2 === 0){
      sum += Number(arr[i]);
    }else{
      sum += Number(-arr[i]);
    }
    
  }
  return sum;
}


alternateDigitSum(521);