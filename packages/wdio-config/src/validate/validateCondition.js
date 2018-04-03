import { DEFAULTS } from '../../../webdriver/src/constants';

const validateCondition = (value, defaultValue) => {
    let result = Object.keys(DEFAULTS).filter((key) => {
        const configObject = DEFAULTS[key];
        
        return defaultValue === configObject.default && configObject.match && value.match(configObject.match);
    });

    return result.length > 0;
};

export default validateCondition;
