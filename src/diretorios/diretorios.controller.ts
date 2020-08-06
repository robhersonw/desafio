import { Controller, Post,  Body, Get, Query} from '@nestjs/common';
import {DiretoriosService} from './diretorios.service';
import {CriarDiretorioDto} from './dtos/criarDiretorio.dto';

@Controller('diretorio')
export class DiretoriosController {

    //Declarando o Construtor
    constructor(private readonly diretoriosService: DiretoriosService){}




}
