import chalk from 'chalk';
import getType from 'jest-get-type';
import { format, ValidationError, ERROR } from 'jest-validate';

const errorMessage = (
    option,
    received,
    defaultValue,
    options, 
    schema
) => {
    const { errorMessage, type, options: opts } = schema[option];
    const { comment, title: { error } } = options;

    const message = `  Option ${ chalk.bold(`"${ option }"`)} ${ errorMessage }
    ${ chalk.bold.green(opts) } and of type ${ chalk.bold.green(type) }

    but instead received:
    ${ chalk.bold.red(received) } of type ${ chalk.bold.red(getType(received)) }

    Example:
    {
        ${ chalk.bold(`"${ option }"`)}: ${ chalk.bold(format(defaultValue)) }
    }`

    throw new ValidationError(error || ERROR, message, comment);
};
  
export default errorMessage;
