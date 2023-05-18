const countVowelsInString = require('./count-vowels-in-string')

describe('', () => { 
    it('should', () => { 
        expect(countVowelsInString("Hello, World!")).toBe(3);
        expect(countVowelsInString("This is a test string.")).toBe(6);
        expect(countVowelsInString("NoVowelsHere")).toBe(5);
        expect(countVowelsInString("AEIOUaeiou")).toBe(10);
    })
})