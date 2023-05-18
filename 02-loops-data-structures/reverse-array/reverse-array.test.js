const reverseArray = require('./reverse-array')

describe('', () => { 
    it('should', () => { 
        expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
        expect(reverseArray(["a", "b", "c"])).toEqual(["c", "b", "a"]);
        expect(reverseArray([true, false, true])).toEqual([true, false, true]);
        expect(reverseArray([])).toEqual([]);
    })
})