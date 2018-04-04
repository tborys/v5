import { validate } from 'jest-validate';
import validateCondition from './validateCondition';
import errorMessage from './errorMessage';

export default (userConfig, validOptions) => {
    const { exampleConfig } = validOptions;

    let options = Object.assign(validOptions, {
        condition: (...args) => validateCondition(...args, exampleConfig),
        error: (...args) => errorMessage(...args, exampleConfig)
    });

    console.log(options)
    return validate(userConfig, options);
};
