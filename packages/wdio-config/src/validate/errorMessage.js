import { ValidationOptions } from 'jest-validate';

import chalk from 'chalk';
import getType from 'jest-get-type';
import { format, ValidationError, ERROR } from 'jest-validate';

const errorMessage = (
    option,
    received,
    defaultValue,
    options,
  ) => {
      // custom error message for protocol
      console.log('Option', option, 'Received', received, 'DefaultValue', defaultValue, 'Options', options)
          const message = `  Option ${chalk.bold(`"${option}"`)} ${ schema[option].message }
            ${chalk.bold.green(schema[option].value)}
            
            but instead received:
            ${chalk.bold.red(received)}
  
          Example:
          {
              ${chalk.bold(`"${option}"`)}: ${chalk.bold(format(defaultValue))}
          }`
          const comment = options.comment;
          const name = (options.title && options.title.error) || ERROR;
  
          throw new ValidationError(name, message, comment);
  };
  
 export default errorMessage;