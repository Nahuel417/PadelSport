import { Request, Response } from 'express';

export const getAppointmentsController = (req: Request, res: Response) => {
    res.json('Obtener el listado de todos los turnos de todos los usuarios.');
};

export const getAppointmentByIdController = (req: Request, res: Response) => {
    res.json('Obtener el detalle de un turno específico.');
};

export const scheduleAppointmentsByIdController = (req: Request, res: Response) => {
    res.json('Agendar un nuevo turno.');
};

export const cancelAppointmentsController = (req: Request, res: Response) => {
    res.json('Cambiar el estatus de un turno a “cancelled”.');
};
