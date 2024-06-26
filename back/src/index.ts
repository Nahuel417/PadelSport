import server from './server';
import { PORT } from './config/envs';
import indexRouter from './routers/indexRouter';

// ruta principal
server.use(indexRouter);

server.listen(PORT, () => {
    console.log(`Server iniciado en el puerto ${PORT}`);
});
