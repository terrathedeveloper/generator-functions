function * generatorFunction(list) { // Line 1
  for(let item of list){
    if(Array.isArray(item)){
      yield* generatorFunction(item)
    } else{
      yield item;
    }
  }
}
  const generatorObject = generatorFunction([[1,2,3],[4,5,6]]); // Line 3
  console.log(generatorObject.next().value); // Line 4
  console.log(generatorObject.next().value); // Line 5
  console.log(generatorObject.next().value); // Line 6