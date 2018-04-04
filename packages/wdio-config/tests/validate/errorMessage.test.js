import errorMessage from '../../src/validate/errorMessage';
import { DEFAULTS } from '../../../webdriver/src/constants';

describe('errorMessage', () => {
    describe('when passing an error that is an invalid value', () => {
        const option = 'protocol';
        const received = 'yourmum';
        const defaultValue = 'http';
        const options = {
            comment: 'Invalid',
            title: {
                error: 'Not right'
            }
        };

        it('should throw a ValidationError with the correct message', () => {
            expect(() => errorMessage(option, received, defaultValue, options, DEFAULTS)).toThrowError(options.comment);
            expect(() => errorMessage(option, received, defaultValue, options, DEFAULTS)).toThrowError(options.title.error);
        });
    });

    describe('when passing an error that is a invalid type', () => {
        const option = 'protocol';
        const received = [ 'your', 'mum' ];
        const defaultValue = 'http';
        const options = {
            comment: 'Invalid',
            title: {
                error: 'Not right'
            }
        };

        it('should throw a ValidationError with the correct message', () => {
            expect(() => errorMessage(option, received, defaultValue, options, DEFAULTS)).toThrowError(/string/);
            expect(() => errorMessage(option, received, defaultValue, options, DEFAULTS)).toThrowError(/array/);
        });
    });

    // This scenario should probably live in validate test
    describe('when config is missing', () => {
        // Missing received value (or config)
        describe('and option has a default value', () => {
            // default value in JSON schema
            it('should not throw an errortake the default value', () => {
                
            });
        });
    });

    //should not throw if required config is missing but default is defined
    // should check for types as function?
    // object checks
});
