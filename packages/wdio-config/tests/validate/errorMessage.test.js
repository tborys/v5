import errorMessage from '../../src/validate/errorMessage';

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
            expect(() => errorMessage(option, received, defaultValue, options)).toThrowError(options.comment);
            expect(() => errorMessage(option, received, defaultValue, options)).toThrowError(options.title.error);
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
            expect(() => errorMessage(option, received, defaultValue, options)).toThrowError(/string/);
            expect(() => errorMessage(option, received, defaultValue, options)).toThrowError(/array/);
        });
    });
});
