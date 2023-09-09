class CustomError extends Error {
    public status: number;

    public message: string;

    constructor(status: number, message: string) {
        super();
        this.status = status || 500;
        this.message = message || 'Internal server error!!!';
    }
}

const templateErrors = {
    BAD_REQUEST: (message: string) => new CustomError(400, message),
    UNAUTHORIZED: (message: string) => new CustomError(401, message),
    FORBIDDEN: (message: string) => new CustomError(403, message),
    NOT_FOUND: (message: string) => new CustomError(404, message),
};

export { CustomError, templateErrors };