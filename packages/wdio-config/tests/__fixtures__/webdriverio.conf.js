export const WDIO_DEFAULTS = {
        sync: true,
        specs: ['',''],
        exclude: ['',''],
        suites: {},
        baseUrl: '',
        bail: 0,
        waitforInterval: 500,
        waitforTimeout: 3000,
        framework: 'string',
        reporters: [''],
        
        // How to get the one below working correctly with jest-validate?
        reporterOptions: {
            reporter: {
                key: "value"
            }
        },
       /**
        * list of reporters to use, a reporter can be either a string or an object with
        * reporter options, e.g.:
        * [
        *  'dot',
        *  {
        *    name: 'spec',
        *    outputDir: __dirname + '/reports'
        *  }
        * ]
        */
       reporters: {
           type: (param) => {
               /**
                * option must be an array
                */
               if (!Array.isArray(param)) {
                   throw new Error('the "reporters" options needs to be a list of strings')
               }
   
               /**
                * array elements must be:
                */
               for (const option of param) {
                   /**
                    * either a string
                    */
                   if (typeof option === 'string') {
                       continue
                   }
   
                   /**
                    * or an object that contains at least a `name` key with the name
                    * of the reporter and arbitrary options
                    */
                   if (typeof option === 'object' && typeof option.name === 'string') {
                       continue
                   }
   
                   throw new Error(
                       'a reporter should be either a string in the format "wdio-<reportername>-reporter" ' +
                       'or a function/class. Please see the docs for more information on custom reporters ' +
                       '(http://webdriver.io/guide/testrunner/reporters.html)'
                   )
               }
   
               return true
           },
           default: []
       },
       maxInstances: {
           type: 'number',
           default: 100
       },
       maxInstancesPerCapability: {
           type: 'number',
           default: 100
       },
   
       /**
        * framework defaults
        */
       mochaOpts: {
           type: 'object',
           default: {
               timeout: DEFAULT_TEST_TIMEOUT
           }
       },
       jasmineNodeOpts: {
           type: 'object',
           default: {
               defaultTimeoutInterval: DEFAULT_TEST_TIMEOUT
           }
       },
       cucumberOpts: {
           type: 'object',
           default: {
               timeout: DEFAULT_TEST_TIMEOUT
           }
       }}
   