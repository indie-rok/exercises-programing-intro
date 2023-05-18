const canIOrderItem  = require('./count-characters-in-string')

describe('', () => { 
    it('should', () => { 
        const stockArray = [{ "Pizza": 5 }, { "Burger": 3 }, { "Pasta": 0 }];

        expect(canIOrderItem("Pizza", stockArray)).toBe(true);
        expect(canIOrderItem("Burger", stockArray)).toBe(true);

        expect(canIOrderItem("Pasta", stockArray)).toBe(false);
        expect(canIOrderItem("Salad", stockArray)).toBe(false);
    })
})