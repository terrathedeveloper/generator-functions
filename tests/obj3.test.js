const pairsSumFunc= require('../src/obj3');


describe("pairwiseFunction()",()=>{
    test('return any of the possible pairs of the array that produce the sum',()=>{
        let pairs = pairsSumFunc([1, 9, 2, 4, 7, 4],11);
        const solutions = ['(9, 2)', '(2, 9)', '(4, 7)','(7, 4)'];
        expect(solutions.includes(pairs.next().value)).toBeTruthy();
        expect(solutions.includes(pairs.next().value)).toBeTruthy();
        expect(solutions.includes(pairs.next().value)).toBeTruthy();
        expect(solutions.includes(pairs.next().value)).toBeTruthy();
    })
})