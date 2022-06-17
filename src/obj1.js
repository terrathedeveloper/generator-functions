/*
Input: A 2-d rectangular list. An example is [[1, 2, 3], [6, 5, 4]].
Output: The sequence of the transpose. For the given example, the sequence is 1, 6, 2, 5, 3, 4.
*/

function* anotherGenerator(list,iter) {
  for(let item of list){
    yield item[iter];
  }
}

function* getZippedSequence(nums) { // Line 1
  //Assume all arrays are the same length
  //Figure out how many arrays need to be zipped together
  //loop through each array and output each item
  const indexArr = Array(nums[0].length).keys();
  let iterator =[...indexArr]; //Create an array with all possible indexes based on length of first item
  for(let i of iterator){
      //The yield* expression is used to delegate to another generator or iterable object.
      //yield* anotherGenerator(nums,i);  //Must use star on yield to be able to yield iterable
      yield* nums.map(item=>item[i]);
  }
  
 /* 
    Initial Thought Process

   console.log(nums[0].shift());
   console.log(nums[1].shift());
   console.log(nums[0].shift());
   console.log(nums[1].shift());
   console.log(nums[0].shift());
   console.log(nums[1].shift());
   console.log('length',nums[0].length)//*/
  
}
 /* const zipGen = zipFunction([[1,2,3],[4,5,6],[7,8,9]]); // Line 3
  console.log(zipGen.next().value); // Line 4
  console.log(zipGen.next().value); // Line 5
  console.log(zipGen.next().value); // Line 6
  console.log(zipGen.next().value); // Line 4
  console.log(zipGen.next().value); // Line 5
  console.log(zipGen.next().value); // Line 6
  console.log(zipGen.next().value); // Line 6
  console.log(zipGen.next().value); // Line 6
  console.log(zipGen.next().value); // Line 6*/
  module.exports=getZippedSequence;