import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { diretorio } from './diretorio.entity';
import {CriarDiretorioDto} from './dtos/criarDiretorio.dto';


@Injectable()
export class DiretoriosService {
  constructor(
    @InjectRepository(diretorio)
    private usersRepository: Repository<diretorio>,
  ) {}

async criaDiretorio(criaDiretorioDto: CriarDiretorioDto): Promise<void>{
 
}


  findAll(): Promise<diretorio[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<diretorio> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}