const textInter = (command) => {
  const arr = command.split("");
  for (let i = 0; i < arr.length; i++){
    if(arr[i] === '(' && arr[i+1] === ')'){
      arr[i] = 'o'
    }
  }

 const arr1= arr.filter(c=> c !== '(' );
 const arr2 = arr1.filter(c => c !== ')');
  return arr2.join('');
};

const result = textInter("G()()()()(al)");
console.log(result);
