import { Request, Response } from 'express';
import { cancelAppointmentService, getAppointmentByIdService, getAppointmentsService, scheduleAppointmentService } from '../services/appointmentsServices';
import { Appointment } from '../entities/Appointment';

// Agendar un nuevo turno
export const scheduleAppointments = async (req: Request, res: Response) => {
    try {
        const newAppointment: Appointment = await scheduleAppointmentService(req.body);
        res.status(200).json(newAppointment);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener el listado de todos los turnos de todos los usuarios
export const getAppointments = async (req: Request, res: Response) => {
    try {
        const appointments: Appointment[] = await getAppointmentsService();
        res.status(201).json(appointments);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener el detalle de un turno específico
export const getAppointmentById = async (req: Request, res: Response) => {
    try {
        const appointments: Appointment = await getAppointmentByIdService(+req.params.id);
        res.status(200).json(appointments);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// Cambiar el estatus de un turno a “cancelled”
export const cancelAppointments = async (req: Request, res: Response) => {
    try {
        const { id } = req.body;
        const appointments = await cancelAppointmentService(id);
        res.status(200).json(appointments);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
