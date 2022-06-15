/*Input: A list of values. An example is [1, 9, 2, 4, 1, 4].
Output: The pairwise sums of the elements. For the given example, the return value is a list containing [10, 11, 6, 5, 5].
*/
function* pairwiseFunc(list) {
  const result = []; //array to store result
  for (let i = 0; i < list.length; i++) {  //loop through list
    if (list[i + 1]) { //stop at the end of the list
      result.push(list[i] + list[i + 1]);// push sum of consecutive numbers to result array
    }
  }
  yield result;  
}
/*const sums = pairwiseFunc([1, 9, 2, 4, 1, 4]); // Line 3
console.log(sums.next().value); // Line 4*/
module.exports=pairwiseFunc;
