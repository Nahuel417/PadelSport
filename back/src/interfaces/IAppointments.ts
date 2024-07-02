interface IAppointments {
    id: number;
    asunto: string;
    dia: string;
    horario: string;
    cancha: string;
    entrenador: string;
    status: 'active' | 'canceled';
    userId: number;
}

export default IAppointments;
