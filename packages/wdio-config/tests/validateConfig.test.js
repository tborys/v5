import { validateConfig } from '../src/utils'

import errorMessage  from '../src/validate/errorMessage';
import validateCondition  from '../src/validate/validateCondition';

const { configByUser } = require('./__fixtures__/webdriver.conf');

const INVALID_CONFIG = { protocol: 'http', port: 4, logLevel: 'debug' };

const DEFAULT_TEST_TIMEOUT = 0;

const configOptions = {
        exampleConfig: configByUser,
        condition: validateCondition,
        error: errorMessage
};

describe('validateConfig', () => {
    it.only('should throw if required config is missing', () => {
        const INVALID_CONFIG = { protocol: 'http', port: 4, logLevel: 'debug' };

        expect(() => validateConfig(INVALID_CONFIG, configOptions)).toThrow()
    })

    it('should not throw if required config is missing but default is defined', () => {
        expect(validateConfig({
            foobar: {
                type: 'string',
                required: true,
                default: 'barfoo'
            }
        }, {})).toEqual({ foobar: 'barfoo' })
    })

    it('should check for types', () => {
        expect(() => validateConfig({
            foobar: {
                type: 'string'
            }
        }, {
            foobar: 123
        })).toThrowError('Expected option "foobar" to be type of string but was number')
    })

    it('should check for types as function', () => {
        const errorCheck = (type) => {
            if (type instanceof Error) {
                return
            }
            throw new Error('not an error')
        }

        expect(() => validateConfig({
            foobar: { type: errorCheck }
        }, {
            foobar: { message: 'foobar', stack: 'barfoo' }
        })).toThrowError(/Type check for option "foobar" failed: not an error/)

        expect(validateConfig({
            foobar: { type: errorCheck }
        }, {
            foobar: new Error('foobar')
        }).hasOwnProperty('foobar')).toBe(true)
    })

    it('should match something', () => {
        expect(() => validateConfig({
            logLevel: {
                type: 'string',
                default: 'silent',
                match: /(trace|debug|info|warn|error)/
            }
        }, {
            logLevel: 'dontknow'
        })).toThrowError(/doesn't match expected values/)

        expect(validateConfig({
            logLevel: {
                type: 'string',
                default: 'silent',
                match: /(trace|debug|info|warn|error)/
            }
        }, {
            logLevel: 'info'
        }).hasOwnProperty('logLevel')).toBe(true)
    })
})
