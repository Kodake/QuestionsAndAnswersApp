import { RespuestaCuestionarioDetalle } from './respuestaCuestionarioDetalle';

export class RespuestaCuestionario {
    id?: number;
    cuestionarioId: number;
    nombreParticipante: string;
    listRtaCuestionarioDetalle: RespuestaCuestionarioDetalle[];
    fecha?: Date;
}