import { Module } from '@nestjs/common';
import {DiretoriosModule} from './diretorios/diretorios.module'
import { TypeOrmModule } from '@nestjs/typeorm';
import { diretorio } from './diretorios/diretorio.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'desafioEssia',
    entities: [diretorio],
    synchronize: true,
  }),  DiretoriosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
