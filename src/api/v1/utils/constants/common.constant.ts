export const ROLE = {
    SUPER_ADMIN: 'superAdmin',
    ADMIN: 'admin',
    EMPLOYEE: 'employee',
    INSTITUTE: 'institute',
    BANK: 'bank',
    INSTITUTE_PERSON: 'institutePerson'
};

export const SUPER_ADMIN = {
    EMAIL: 'admin@yopmail.com',
    PASSWORD: '12345678',
    NAME: 'Super Admin',
    COUNTRY_CODE: 91,
    MOBILE: 9999999999
};

export const EMP_TYPES = 'L1,L2,L3';

export const CASE_STATUS = {
    NEW_CASE: 0,
    CASE_ASSIGNED: 1,
    NOTICE_SEND: 2
}

export const ERROR_TYPES = {
    VALIDATION_ERROR: "ValidationError",
    ERROR: "Error", // generic error
    REFERENCE_ERROR: "ReferenceError", // variable not exists
    TYPE_ERROR: "TypeError", // operation incomplete
    SYNTAX_ERROR: "SyntaxError",
    URI_ERROR: "URIError",
    EVAL_ERROR: "EvalError",
    RANGE_ERROR: "RangeError",
    AGGREGATE_ERROR: "AggregateError", // multiple errors ground, useful for Promises
    MONGO_SERVER_ERROR: "MongoServerError"
}
