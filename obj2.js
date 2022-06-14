function* generatorFunction(list) {
  // Line 1
  const arr = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i + 1]) {
       console.log(list[i + 1]);
      arr.push(list[i] + list[i + 1]);
    }
  }
  yield arr;  
}
const generatorObject = generatorFunction([1, 9, 2, 4, 1, 4]); // Line 3
console.log(generatorObject.next().value); // Line 4
//console.log(generatorObject.next().value); // Line 5
//console.log(generatorObject.next().value); // Line 6
