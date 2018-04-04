import validateCondition from '../../src/validate/validateCondition';
import { DEFAULTS } from '../../../webdriver/src/constants';

describe('validateCondition', () => {
    it('should return `true` if the value matches http', () => {
        let result = validateCondition('http', 'http', DEFAULTS);

        expect(result).toBeTruthy();
    });

    it('should return `true` if the value matches silent', () => {
        let result = validateCondition('silent', 'silent', DEFAULTS);

        expect(result).toBeTruthy();
    });

    it('should return `false` if the value does not match', () => {
        let result = validateCondition('yourmum', 'http', DEFAULTS);

        expect(result).toBeFalsy();
    });
});

//WDIO_DEFAULTS checks 
