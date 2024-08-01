import { NextFunction, Request, Response } from 'express';

export const validarAppointment = (req: Request, res: Response, next: NextFunction) => {
    const { asunto, fecha, horario, cancha, entrenador } = req.body;

    if (!asunto || !fecha || !horario || !cancha || !entrenador) res.status(400).json({ message: 'Debe Completar todos los campos.' });
    else next();
};
