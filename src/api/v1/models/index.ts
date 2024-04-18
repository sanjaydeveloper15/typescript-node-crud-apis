import mongoose from 'mongoose'
import { readFile } from 'fs/promises'
// import User from './userModel.js'
// import Bank from './bankModel.js'

// const server = JSON.parse(
//   await readFile(
//     new URL('../../../../config/server.json', import.meta.url)
//   )
// )

const server = {
  "appName": "CRUD API's with TypeScript",
  "dbHostLocal": "mongodb://localhost:27017/dev",
  "dbPort": 3306,
  "port": 5003
}

const connectDb = () => {
  const connect = mongoose.connect(server.dbHostLocal).then(
    () => { console.log('Yeah, Database is connected') },
    (err:any) => { console.log(`Can not connect to the database ${err}`) },
  )

  mongoose.set('debug', true)
  return connect
}

const models = { }

export { connectDb }

export default models