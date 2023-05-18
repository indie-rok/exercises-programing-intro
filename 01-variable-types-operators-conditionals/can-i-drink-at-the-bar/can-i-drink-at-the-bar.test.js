const canIDrinkAtTheBar  = require('./can-i-drink-at-the-bar')

describe('canIDrinkAtTheBar', () => {
    it('should return true for a person older than or equal to the drinking age limit in their country', () => {
        const person = { age: 22, country: 'us' };
        expect(canIDrinkAtTheBar(person)).toBe(true);
    });

    it('should return false for a person younger than the drinking age limit in their country', () => {
        const person = { age: 20, country: 'us' };
        expect(canIDrinkAtTheBar(person)).toBe(false);
    });

    it('should return true for a person exactly at the drinking age limit in their country', () => {
        const person = { age: 18, country: 'ng' };
        expect(canIDrinkAtTheBar(person)).toBe(true);
    });

    it('should handle the case where the country does not exist in the countryAgeLimit map', () => {
        const person = { age: 25, country: 'unknownCountry' };
        expect(canIDrinkAtTheBar(person)).toBe(false);
    });
});
