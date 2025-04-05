export enum NODE_ENV {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production',
    TEST = 'test'
}

export enum STATUS_CODES {
    SUCCESS = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    REQUEST_TIMEOUT = 408,
    CONFLICT = 409,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504
}

export enum ROLE {
    SUPER_ADMIN = 'superAdmin',
    ADMIN = 'admin',
    EMPLOYEE = 'employee',
    INSTITUTE = 'institute',
    BANK = 'bank',
    INSTITUTE_PERSON = 'institutePerson'
}

export const EMP_TYPES: string[] = ["L1", "L2", "L3"];
interface ConstScehma {
    SUPER_ADMIN: string;
    ADMIN: string;
    EMPLOYEE: string;
    INSTITUTE: string;
    BANK: string;
    INSTITUTE_PERSON: string;
    EMAIL: string;
    PASSWORD: string;
    NAME: string;
    COUNTRY_CODE: string;
    MOBILE: string;
    NEW_CASE: number;
    CASE_ASSIGNED: number;
    NOTICE_SEND: number;
    VALIDATION_ERROR: string;
    ERROR: string;
    REFERENCE_ERROR: string;
    TYPE_ERROR: string;
    SYNTAX_ERROR: string;
    URI_ERROR: string;
    EVAL_ERROR: string;
    RANGE_ERROR: string;
    AGGREGATE_ERROR: string;
    MONGO_SERVER_ERROR: string;
}

export const SUPER_ADMIN: Partial<ConstScehma> = {
    EMAIL: 'admin@yopmail.com',
    PASSWORD: '12345678',
    NAME: 'Super Admin',
    COUNTRY_CODE: '91',
    MOBILE: '9999999999'
};

export const CASE_STATUS: Partial<ConstScehma> = {
    NEW_CASE: 0,
    CASE_ASSIGNED: 1,
    NOTICE_SEND: 2
}

export const ERROR_TYPES: Partial<ConstScehma> = {
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

export const SUCCESS_RESP: boolean = true;

export const ERROR_RESP: boolean = false;

export enum CODE {
    OKAY = 0,
    NOT_OKAY = 1
}