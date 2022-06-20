/*Input: A nums of values and a target sum. An example is a nums [1, 9, 2, 4, 7, 4] and a specified target sum of 11.
Output: The procedure will identify any of these pairs: (9, 2), (2, 9), (4, 7), or (7, 4)
*/

function* getPairBySum(nums, targetSum) {
  for (let i = 1; i < nums.length-1; i++) { //loop through nums of element
    const prev = nums[i - 1], curr=nums[i], next=nums[i + 1];
    if (curr + next == targetSum) {  //if the consecutive nums items exist and are equal to the passed in value
      yield `(${curr}, ${next})`;//store the value in an array
    } else if (prev + curr == targetSum) { //if the nums item behind and the current nums item equal the sum
      yield `(${curr}, ${prev})`;//store the value in the array
    }
  }
}
/*const pairs = getPairBySum([1, 9, 2, 4, 7, 4], 11); // Line 3
const solutions = ['(9, 2)', '(2, 9)', '(4, 7)','(7, 4)'];
console.log(solutions.includes(pairs.next().value)); // Line 4
console.log(pairs.next().value); // Line 4
console.log(pairs.next().value); // Line 4
console.log(pairs.next().value); // Line 4
console.log(pairs.next().value); // Line 4
console.log(pairs.next().value); // Line 4*/
module.exports = getPairBySum;