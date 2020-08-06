import { TypeOrmModuleOptions, TypeOrmModule } from '@nestjs/typeorm';
import {diretorio} from '../diretorios/diretorio.entity'

require('dotenv').config();

export interface ConfigService {
        type: string,
        host: string,
        port: number,
        username: string,
        password: string,
        database: string,
        entities: string[],
        synchronize: boolean,
        logging: boolean
    };
  

  const configService: ConfigService = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "desafioEssia",
    entities: ["src/diretorios/diretorio.entity.ts"],
    synchronize: true,
    logging: false
};

export {configService}

