import validateCondition from '../../src/validate/validateCondition';

describe('validateCondition', () => {
    it('should return `true` if the value matches http', () => {
        let result = validateCondition('https', 'http');

        expect(result).toBeTruthy();
    });

    it('should return `true` if the value matches silent', () => {
        let result = validateCondition('silent', 'silent');

        expect(result).toBeTruthy();
    });

    it('should return `false` if the value does not match', () => {
        let result = validateCondition('yourmum', 'http');

        expect(result).toBeFalsy();
    });
});
