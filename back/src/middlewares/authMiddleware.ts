import { NextFunction, Request, Response } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.headers;

    if (token === 'autenticado') next();
    else res.status(400).json({ message: 'Error de Autenticación.' });
};
