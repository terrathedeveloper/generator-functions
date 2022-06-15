const pairwiseFunc= require('../src/obj2');


describe("pairwiseFunction()",()=>{
    test('return an array with the pairwise sum of elements',()=>{
        let sums = pairwiseFunc([1, 9, 2, 4, 1, 4]);
        expect(sums.next().value).toEqual([10, 11, 6, 5, 5]);//deep comparison
    })
})