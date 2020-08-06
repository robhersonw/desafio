import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiretoriosService } from './diretorios.service';
import { DiretoriosController } from './diretorios.controller';
import { diretorio } from './diretorio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([diretorio])],
  providers: [DiretoriosService],
  controllers: [DiretoriosController],
})
export class DiretoriosModule {}