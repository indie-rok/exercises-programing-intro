const fizzBuzz  = require('./fizzbuzz')

describe('', () => { 
    it('should', () => { 
        expect(fizzBuzz(3)).toBe('Fizz');
        expect(fizzBuzz(9)).toBe('Fizz');

        expect(fizzBuzz(5)).toBe('Buzz');
        expect(fizzBuzz(20)).toBe('Buzz');

        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(30)).toBe('FizzBuzz');

        expect(fizzBuzz(4)).toBe(4);
        expect(fizzBuzz(7)).toBe(7);
    })
})