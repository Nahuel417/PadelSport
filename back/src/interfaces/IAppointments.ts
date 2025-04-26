interface IAppointments {
    id: number;
    asunto: string;
    dia: string;
    horario: string;
    cancha: string;
    entrenador: string;
    status: 'activo' | 'cancelado';
    userId: number;
}

export default IAppointments;
