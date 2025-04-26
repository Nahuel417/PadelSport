import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import indexRouter from './routers/indexRouter';

const server = express();

// middlewares
server.use(express.json());
server.use(cors());
server.use(morgan('dev'));

// ruta principal
server.use(indexRouter);

export default server;
