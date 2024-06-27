import appointmentsDto from '../dto/appointmentsDto';
import IAppointments from '../interfaces/IAppointments';

let appointments: IAppointments[] = [
    {
        id: 1,
        asunto: 'jugar',
        dia: 'miercoles',
        horario: '18:00',
        cancha: 'cancha 1',
        entrenador: 'alonso',
        active: true,
    },
    {
        id: 2,
        asunto: 'entrenar',
        dia: 'lunes',
        horario: '15:00',
        cancha: 'cancha 3',
        entrenador: 'ninguno',
        active: true,
    },
];

let id: number = 3;

let active: boolean = true;

export const getAppointmentsService = async (): Promise<IAppointments[]> => {
    try {
        return appointments;
    } catch (error) {
        console.log('Error en getAppointmentsService: ', error);
        throw new Error('No se pueden mostrar todos los turnos');
    }
};

export const getAppointmentByIdService = async (id: number): Promise<IAppointments[] | string> => {
    try {
        const appointment = appointments.filter((appointments: IAppointments) => appointments.id === id);

        if (appointment.length == 0) return 'No se encontro el turno solicitado';
        else return appointment;
    } catch (error) {
        console.log('Error en getAppointmentByIdService: ', error);
        throw new Error('No se encontro el turno requerido');
    }
};

export const scheduleAppointmentService = async (appointment: appointmentsDto): Promise<IAppointments> => {
    try {
        const newAppointment: IAppointments = {
            id,
            asunto: appointment.asunto,
            dia: appointment.dia,
            horario: appointment.horario,
            cancha: appointment.cancha,
            entrenador: appointment.entrenador,
            active,
        };
        id++;

        appointments.push(newAppointment);

        return newAppointment;
    } catch (error) {
        console.log('Error en scheduleAppointmentService: ', error);
        throw new Error('No se pudo agendar el turno');
    }
};

export const cancelAppointmentService = async (appointment: IAppointments): Promise<IAppointments> => {
    try {
        appointment.active = false;

        return appointment;
    } catch (error) {
        console.log('Error en cancelAppointmentService: ', error);
        throw new Error('No se pudo cancelar el turno');
    }
};
