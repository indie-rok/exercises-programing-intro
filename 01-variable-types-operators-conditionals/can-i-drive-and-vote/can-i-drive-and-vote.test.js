const canIDriveAndVote  = require('./can-i-drive-and-vote')

describe('canIDriveAndVote', () => {
    it('should return true if a person can both drive and vote in their country', () => {
        const person = { age: 21, country: 'us' };
        expect(canIDriveAndVote(person)).toBe(true);
    });

    it('should return false if a person cannot drive but can vote in their country', () => {
        const person = { age: 18, country: 'us' };
        expect(canIDriveAndVote(person)).toBe(false);
    });

    it('should return false if a person can drive but cannot vote in their country', () => {
        const person = { age: 17, country: 'ng' };
        expect(canIDriveAndVote(person)).toBe(false);
    });

    it('should return false if a person cannot either drive or vote in their country', () => {
        const person = { age: 15, country: 'ng' };
        expect(canIDriveAndVote(person)).toBe(false);
    });

    it('should handle the case where the country does not exist in the countryAgeLimit map', () => {
        const person = { age: 25, country: 'unknownCountry' };
        expect(canIDriveAndVote(person)).toBe(false);
    });
});
