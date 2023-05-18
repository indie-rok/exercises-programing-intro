const largestNumberInArray = require('./largest-number-in-array')

describe('', () => { 
    it('should', () => { 
        expect(largestNumberInArray([1, 2, 3])).toBe(3);
        expect(largestNumberInArray([-5, 0, 5])).toBe(5);
        expect(largestNumberInArray([10, 10, 10])).toBe(10);
        expect(largestNumberInArray([4])).toBe(4);
    })
})