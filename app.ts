"use strict"
import dotenv from 'dotenv'
dotenv.config() //for calling process.env.VAR_NAME globally
import express, { Application, Request, Response } from 'express'
import cors from 'cors'// cors for call apis from different server as well
import bodyParser from 'body-parser'// body parser and for getting json, url encoded, form data in request
// import responseMiddleware from './src/api/v1/middlewares/response.middleware.js'// common response function
import { connectDb } from './src/api/v1/models/index.js'
import router from './src/api/v1/routes/index.js'
import path from 'path'
import { load as loadYmlFile } from 'js-yaml'
import { serve as serveSwagger, setup as setupSwagger } from 'swagger-ui-express'
import { readFileSync } from 'fs'
// import messages from './src/api/v1/utils/helpers/messages.js'
import helmet from 'helmet'
import WinstonLogger from './src/api/v1/logger/winston.js'
import { SERVICE_TYPE } from './src/api/v1/utils/constants/common.constant.js'

const app: Application = express()
const port: number = Number(process.env.SERVER_PORT) || 3001
const Logger = new WinstonLogger()

// Middlewares
app.use(cors()) // enabling CORS
app.use(helmet()) // secure HTTP heards
// body parser and for getting json, url encoded, form data in request
app.use(bodyParser.json({ limit: '5mb' })) // we need to pass Content-Type: application/json in header
//app.use(multer().array('file')) //for getting form data, we don't need to pass anything specifically in header
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }))

// Serve static files
app.use(express.static(path.resolve('./public')))
app.use(express.static(path.resolve('./public/front')))

// API v1 base route set
app.use('/api/v1', router)

//front site

//app.set('view engine', 'pug')
app.get('/', (req, res) => {
  res.sendFile(path.resolve('./public/front/index.html'))
})

// Swagger documentations
const swaggerDocument = loadYmlFile(readFileSync('./swagger-docs.yml', 'utf-8')) as object;
router.use("/docs", serveSwagger, setupSwagger(swaggerDocument))
// router.get("/docs", setupSwagger(swaggerDocument))

//404 error handling
app.use((req: Request, res: Response) => {
  const error = new Error("Url not found!")
  res.status(404).send({ message: error.message, status: false })
})

//if connect db & listen server on mentioned port
connectDb().then(async () => {
  app.listen({ port }, () => {
    Logger.info(SERVICE_TYPE.SERVER, `Yeah, ${process.env.APP_NAME} listening on port ${port}!`)
  })
}).catch((error) => {
  Logger.error(SERVICE_TYPE.SERVER, `Database connection failed!`, { error })
  process.exit(1) // terminate Node.js process
})