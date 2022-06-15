/*Input: A list of values and a target sum. An example is a list [1, 9, 2, 4, 7, 4] and a specified target sum of 11.
Output: The procedure will identify any of these pairs: (9, 2), (2, 9), (4, 7), or (7, 4)
*/

function* pairsSumFunc(list, val) {
  for (let i = 0; i < list.length; i++) { //loop through list of element
    if (list[i + 1] && list[i] + list[i + 1] == val) {  //if the consecutive list items exist and are equal to the passed in value
      yield `(${list[i]}, ${list[i + 1]})`;//store the value in an array
    } else if (list[i - 1] && list[i - 1] + list[i] == val) { //if the list item behind and the current list item equal the sum
      yield `(${list[i]}, ${list[i - 1]})`;//store the value in the array
    }
  }
}
/*const pairs = pairsSumFunc([1, 9, 2, 4, 7, 4], 11); // Line 3
const solutions = ['(9, 2)', '(2, 9)', '(4, 7)','(7, 4)'];
console.log(solutions.includes(pairs.next().value)); // Line 4
console.log(pairs.next().value); // Line 4
console.log(pairs.next().value); // Line 4
console.log(pairs.next().value); // Line 4
console.log(pairs.next().value); // Line 4
console.log(pairs.next().value); // Line 4*/
module.exports = pairsSumFunc;