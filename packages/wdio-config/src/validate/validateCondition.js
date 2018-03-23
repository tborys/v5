const validateCondition = (value, defaultValue) => {
    console.log('Spit out values', defaultValue, value)
    if (defaultValue === 'http') {
        return value.match(/(^|\W)(http|https)($|\W)/);
    } else if (defaultValue === 'silent') {
        return value.match(/(^|\W)(silent|trace|debug|info|warn|error)($|\W)/);
    } else {
        return value === null || value === undefined || toString.call(value) === toString.call(defaultValue);
    }  
};

export default validateCondition;