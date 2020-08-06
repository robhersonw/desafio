import "reflect-metadata";
import {createConnection} from "typeorm";
import {diretorio} from "./diretorios/diretorio.entity";

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "desafioEssia",
    entities: [
        diretorio
    ],
    synchronize: true,
    logging: false
}).then(connection => {

    
}).catch(error => console.log(error));