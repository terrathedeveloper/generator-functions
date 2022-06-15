/*
Input: A 2-d rectangular list. An example is [[1, 2, 3], [6, 5, 4]].
Output: The sequence of the transpose. For the given example, the sequence is 1, 6, 2, 5, 3, 4.
*/

function* anotherGenerator(list,iter) {
  for(let item of list){
    yield item[iter];
  }
}

function* zipFunction(list2d) { // Line 1
  //Assume all arrays are the same length
  //Figure out how many arrays need to be zipped together
  //loop through each array and output each item
  let iterator =[...Array(list2d[0].length).keys()]; //Create an array with all possible indexes based on length of first item
  for(let i of iterator){
      yield* anotherGenerator(list2d,i);  //Must use star on yield to be able to yield iterable
  }
  
 /* 
    Initial Thought Process
 
   console.log(list2d[0].shift());
   console.log(list2d[1].shift());
   console.log(list2d[0].shift());
   console.log(list2d[1].shift());
   console.log(list2d[0].shift());
   console.log(list2d[1].shift());
   console.log('length',list2d[0].length)*/
  
}
  /*const zipGen = zipFunction([[1,2,3],[4,5,6],[7,8,9]]); // Line 3
  console.log(zipGen.next().value); // Line 4
  console.log(zipGen.next().value); // Line 5
  console.log(zipGen.next().value); // Line 6
  console.log(zipGen.next().value); // Line 4
  console.log(zipGen.next().value); // Line 5
  console.log(zipGen.next().value); // Line 6
  console.log(zipGen.next().value); // Line 6
  console.log(zipGen.next().value); // Line 6
  console.log(zipGen.next().value); // Line 6*/
  module.exports=zipFunction;