import { Request, Response } from 'express';
import IAppointments from '../interfaces/IAppointments';
import { cancelAppointmentService, getAppointmentByIdService, getAppointmentsService, scheduleAppointmentService } from '../services/appointmentsServices';

export const getAppointments = async (req: Request, res: Response) => {
    const appointments: IAppointments[] = await getAppointmentsService();
    res.status(201).json(appointments);
    // res.json('Obtener el listado de todos los turnos de todos los usuarios.');
};

export const getAppointmentById = async (req: Request, res: Response) => {
    const appointments: IAppointments[] | string = await getAppointmentByIdService(+req.params.id);
    res.status(200).json(appointments);
    // res.json('Obtener el detalle de un turno específico.');
};

export const scheduleAppointments = async (req: Request, res: Response) => {
    const newAppointment = await scheduleAppointmentService(req.body);
    res.status(200).json(newAppointment);
    // res.json('Agendar un nuevo turno.');
};

export const cancelAppointments = async (req: Request, res: Response) => {
    const { id } = req.body;
    const appointments: IAppointments | string = await cancelAppointmentService(id);
    res.status(200).json(appointments);
    // res.json('Cambiar el estatus de un turno a “cancelled”.');
};
