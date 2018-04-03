import validate from '../../src/validate';

import { DEFAULTS } from 'webdriver';

describe('validate', () => {
    it('should return `something`', () => {
        console.log('', DEFAULTS);
        const userConfig = { protocol: 'x' };
        console.log(validate(userConfig, DEFAULTS));
    });
});