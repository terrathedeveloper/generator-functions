/*Input: A nums of values. An example is [1, 9, 2, 4, 1, 4].
Output: The pairwise sums of the elements. For the given example, the return value is a nums containing [10, 11, 6, 5, 5].
*/
function* getPairwiseSums(nums) { //DONT FORGET THE -1 IN THE LOOP!!!!!!!
  const result = []; //array to store result
  for (let i = 0; i < nums.length-1; i++) {  //loop through nums
      result.push(nums[i] + nums[i + 1]);// push sum of consecutive numbers to result array
  }
  yield result;  
}
//const sums = getPairwiseSums([1, 9, 2, 4, 1, 4]); // Line 3
//console.log(sums.next().value); // Line 4
module.exports=getPairwiseSums;
