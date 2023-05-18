const evenOrOdd  = require('./even-or-odd')

describe('', () => { 
    it('should', () => { 
        expect(evenOrOdd(4)).toBe('even');
        expect(evenOrOdd(0)).toBe('even');

        expect(evenOrOdd(3)).toBe('odd');
        expect(evenOrOdd(7)).toBe('odd');
    })
})