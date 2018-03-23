import errorMessage  from '../src/validate/errorMessage';
import validateCondition  from '../src/validate/validateCondition';
import validateConfig from '../src/validate'

// const { validate } = require('jest-validate');

const { configByUser } = require('./__fixtures__/webdriver.conf');

const INVALID_CONFIG = { protocol: 'http', port: 4, logLevel: 'debug' };

const DEFAULT_TEST_TIMEOUT = 0;

const configOptions = {
        exampleConfig: configByUser,
        condition: validateCondition,
        error: errorMessage
};

describe('Given a validateConfig method', () => {
    describe('when called with an invalid config', () => {
        it('should throw a custom error', () => {
            const result = validateConfig(configOptions, INVALID_CONFIG);

            expect(result).toBe.truthy;
        });
    });
})
