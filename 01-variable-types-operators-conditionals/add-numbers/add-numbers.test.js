const addNumbers  = require('./add-numbers')

describe('addNumbers', () => { 
    it('should add numbers', () => { 
        expect(addNumbers(1,2)).toEqual(3)
        expect(addNumbers(-2,2)).toEqual(0)
        
    })
})