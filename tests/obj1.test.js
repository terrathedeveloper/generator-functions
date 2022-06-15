const zipFunc= require('../src/obj1');


describe("zipFunction()",()=>{
    test('zip a 2d 3x3 rectangular list and return the sequence',()=>{
        let zip = zipFunc([[1,2,3],[4,5,6],[7,8,9]]);
        expect(zip.next().value).toBe(1);
        expect(zip.next().value).toBe(4);
        expect(zip.next().value).toBe(7);
        expect(zip.next().value).toBe(2);
        expect(zip.next().value).toBe(5);
        expect(zip.next().value).toBe(8);
        expect(zip.next().value).toBe(3);
        expect(zip.next().value).toBe(6);
        expect(zip.next().value).toBe(9);
    })
    test('zip a 2d 2x5 rectangular list and return the sequence',()=>{
        let zip = zipFunc([[1,3,5,7,9],[2,4,6,8,10]]);
        expect(zip.next().value).toBe(1);
        expect(zip.next().value).toBe(2);
        expect(zip.next().value).toBe(3);
        expect(zip.next().value).toBe(4);
        expect(zip.next().value).toBe(5);
        expect(zip.next().value).toBe(6);
        expect(zip.next().value).toBe(7);
        expect(zip.next().value).toBe(8);
        expect(zip.next().value).toBe(9);
        expect(zip.next().value).toBe(10);
    })


})