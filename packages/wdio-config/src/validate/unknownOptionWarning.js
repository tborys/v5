import { DEFAULTS } from '../../../webdriver/src/constants';

import chalk from 'chalk';
import {
  format,
  logValidationWarning,
  createDidYouMeanMessage,
  WARNING,
} from 'jest-validate'

const unknownOptionWarning = (
    config,
    exampleConfig,
    option,
    options,
  ) => {
    const didYouMean = createDidYouMeanMessage(
      option,
      Object.keys(exampleConfig),
    );
    const message =
      `  Unknown option ${chalk.bold(`"${option}"`)} with value ${chalk.bold(
        format(config[option]),
      )} was found.` +
      (didYouMean && ` ${didYouMean}`) +
      `\n  This is probably a typing mistake. Fixing it will remove this message.`;
  
    const comment = options.comment;
    const name = (options.title && options.title.warning) || WARNING;
  
    logValidationWarning(name, message, comment);
  };
  
  
export default unknownOptionWarning;

