import {diretorio} from '../diretorio.entity'

export class DiretorioDto{
    readonly idNo: number;
    readonly Nome: string;
    readonly isRoot: boolean;
    readonly noPai: number;

    constructor(dIretorio: diretorio) {
        this.idNo = dIretorio.idNo;
        this.Nome = dIretorio.Nome;
        this.isRoot = dIretorio.isRoot;
        this.noPai = dIretorio.noPai;
    }
}

