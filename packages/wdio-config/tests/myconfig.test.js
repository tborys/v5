import { ValidationOptions } from 'jest-validate';

import chalk from 'chalk';
import getType from 'jest-get-type';
import { format, ValidationError, ERROR } from 'jest-validate';
import { Writable } from 'stream';

const { validate } = require('jest-validate');

const { configByUser } = require('./__fixtures__/webdriver.conf');

const myCustomConfig = { protocol: 'https', port: 4, logLevel: 'debug' };

const DEFAULT_TEST_TIMEOUT = 0;

const errorMessage = (
  option,
  received,
  defaultValue,
  options,
) => {
    // custom error message for protocol
    console.log('Option', option, 'Received', received, 'DefaultValue', defaultValue, 'Options', options)
    if (option === 'protocol') {
        const message = `  Option ${chalk.bold(`"${option}"`)} must have value:
    ${chalk.bold.green('http or https')}
    
    but instead received:
    ${chalk.bold.red(received)}

        Example:
        {
            ${chalk.bold(`"${option}"`)}: ${chalk.bold(format(defaultValue))}
        }`
        const comment = options.comment;
        const name = (options.title && options.title.error) || ERROR;

        throw new ValidationError(name, message, comment);
    } else if (option === 'logLevel') {
        const message = `  Option ${chalk.bold(`"${option}"`)} must one of the following values:
        ${chalk.bold.green('silent, trace, debug, info, warn, error')}
        
        but instead received:
        ${chalk.bold.red(received)}
    
            Example:
            {
                ${chalk.bold(`"${option}"`)}: ${chalk.bold(format(defaultValue))}
            }`
            const comment = options.comment;
            const name = (options.title && options.title.error) || ERROR;
    
            throw new ValidationError(name, message, comment);
        // default fall back
    } else {
        const message = `  Option ${chalk.bold(`"${option}"`)} must be of type:
    ${chalk.bold.green(getType(defaultValue))}

    but instead received:
    ${chalk.bold.red(getType(received))}

        Example:
        {
            ${chalk.bold(`"${option}"`)}: ${chalk.bold(format(defaultValue))}
        }`;
        const comment = options.comment;
        const name = (options.title && options.title.error) || ERROR;

        throw new ValidationError(name, message, comment);
    }
};

const validationCondition = (value, defaultValue) => {
    console.log('Spit out values', defaultValue, value)
    if (defaultValue === 'http') {
        return value.match(/(^|\W)(http|https)($|\W)/);
    } else if (defaultValue === 'silent') {
        return value.match(/(^|\W)(silent|trace|debug|info|warn|error)($|\W)/);
    } else {
        return value === null || value === undefined || toString.call(value) === toString.call(defaultValue);
    }  
};

const configOptions = {
        exampleConfig: configByUser,
        condition: validationCondition,
        error: errorMessage,
};

describe('This is just calling a method to execute it', () => {
    it('should call a validate method', () => {
        const result = validate(myCustomConfig, configOptions);
        console.log('x');
    })
})
