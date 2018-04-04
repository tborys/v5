import validate from '../../src/validate';
import { DEFAULTS } from '../../../webdriver/src/constants';

const INVALID_CONFIG = { protocol: 'http', port: 4, logLevel: 'debug' };

const configOptions = {
    exampleConfig: DEFAULTS
};

describe('validate method', () => {
    it('should implement custom errorMessage', () => {
        const userConfig = { protocol: 'https' };
        const result = validate(userConfig, configOptions);

        expect(result).toBeTruthy;
    });
});