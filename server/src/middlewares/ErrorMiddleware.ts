import {
    Request, Response, ErrorRequestHandler,
} from 'express';

const clientError = (req: Request, res: Response) => {
    res.status(404).json({ message: 'Not Found' });
};

const serverError: ErrorRequestHandler = (error, req, res, next) => {
    console.log(error.message);
    if (error.status) {
        res.status(error.status).json({ message: error.message });
    } else {
        res.status(500).json({ message: 'Server Error' });
    }
};

export { clientError, serverError };