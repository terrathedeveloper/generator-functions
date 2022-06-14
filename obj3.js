function* generatorFunction(list, val) {
  for (let i = 0; i < list.length; i++) {
    if (list[i + 1] && list[i] + list[i + 1] == val) {
      yield `${list[i]} + ${list[i + 1]}`;
    } else if (list[i - 1] && list[i - 1] + list[i] == val) {
      yield `${list[i]} + ${list[i - 1]}`;
    }
  }
}
const generatorObject = generatorFunction([1, 9, 2, 4, 7, 4], 11); // Line 3
console.log(generatorObject.next().value); // Line 4
console.log(generatorObject.next().value); // Line 4
console.log(generatorObject.next().value); // Line 4
console.log(generatorObject.next().value); // Line 4
