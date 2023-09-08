import type IProjeto from "./IProjeto";

export interface ITarefa {
    duracaoEmSegundos: number;
    descricao: string
    projeto: IProjeto
}