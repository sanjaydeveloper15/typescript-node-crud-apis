import mongoose from 'mongoose'
import User from './user.model.js'
import { NODE_ENV } from '../utils/constants/common.constant.js';
import { catchException } from '../utils/helpers/functions.js';

interface IDbServer {
  appName: string;
  dbHostLocal: string;
  dbPort: number;
  port: number;
}

const server: IDbServer = {
  appName: "CRUD API's with TypeScript",
  dbHostLocal: process.env.DB_CONN_URI || "",
  dbPort: 3306,
  port: 5003
}

const connectDb = () => {
  const connect = mongoose.connect(server.dbHostLocal)
    .then(() => {
      console.info('Database is connected!')
    }).catch((err: unknown) => {
      catchException(err)
      throw err
    })
  if (NODE_ENV.DEVELOPMENT === process.env.NODE_ENV) {
    mongoose.set('debug', true) // print queries
  }
  return connect
}

const models = { User }

export { connectDb }

export default models