import { NextFunction, Request, Response } from 'express';

export const validarCredenciales = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password) res.status(400).json({ message: 'Complete todos los campos.' });
    else next();
};
