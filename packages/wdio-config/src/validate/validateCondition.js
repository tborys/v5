const validateCondition = (value, defaultValue, schema) => {
    let result = Object.keys(schema).filter((key) => {
        const configObject = schema[key];

        return defaultValue === configObject.default && configObject.match && value.match(configObject.match);
    });

    return result.length > 0;
};

export default validateCondition;
