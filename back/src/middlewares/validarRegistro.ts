import { NextFunction, Request, Response } from 'express';

export const validarRegistro = (req: Request, res: Response, next: NextFunction) => {
    const { name, last_name, email, password, birthday } = req.body;

    if (!name || !last_name || !email || !password || !birthday) res.status(400).json({ message: 'Debe Completar todos los campos.' });
    else next();
};
