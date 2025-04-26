import server from './server';
import { PORT } from './config/envs';
import { AppDataSource } from './config/data-source';
import 'reflect-metadata';

AppDataSource.initialize().then((res) => {
    console.log('Conexión a la base de datos realizada con exito');

    server.listen(PORT, () => {
        console.log(`Server iniciado en el puerto ${PORT}`);
    });
});
