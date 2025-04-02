"use strict"
import dotenv from 'dotenv'
dotenv.config() //for calling process.env.VAR_NAME globally
import express, { Request, Response } from 'express'
import cors from 'cors'// cors for call apis from different server as well
import bodyParser from 'body-parser'// body parser and for getting json, url encoded, form data in request
import responseMiddleware from './src/api/v1/middlewares/response.middleware.js'// common response function
import { connectDb } from './src/api/v1/models/index.js'
import router from './src/api/v1/routes/index.js'
import path from 'path'
import { load as loadYmlFile } from 'js-yaml'
import { serve as serveSwagger, setup as setupSwagger } from 'swagger-ui-express'
import { readFileSync } from 'fs'
import messages from './src/api/v1/utils/helpers/messages.js'

const app = express()
const port = process.env.SERVER_PORT

//enabling CORS
app.use(cors())

// body parser and for getting json, url encoded, form data in request
app.use(bodyParser.json({ limit: '5mb' })) // we need to pass Content-Type: application/json in header
//app.use(multer().array('file')) //for getting form data, we don't need to pass anything specifically in header
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }))

app.use(express.static(path.resolve('./public')))

// all routing
// app.get('/', (req, res) => {
//   res.send(process.env.APP_NAME)
// })

//api v1 base route set
app.use('/api/v1', router)

//front site
app.use(express.static(path.resolve('./public/front')))
//app.set('view engine', 'pug')
app.get('/', (req, res) => {
  res.sendFile(path.resolve('./public/front/index.html'))
})

const swaggerDocument: any = loadYmlFile(readFileSync('./swagger-docs.yml', 'utf-8'));
router.use("/docs", serveSwagger)
router.get("/docs", setupSwagger(swaggerDocument))

//404 error handling
app.use((req: Request, res: Response) => {
  const error = new Error("Url not found!")
  res.status(404).send({ message: error.message, status: false })
})

//if connect db & listen server on mentioned port
connectDb().then(async () => {
  app.listen({ port }, () => {
    console.log(`Yeah, ${process.env.APP_NAME} listening on port ${port}!`)
  })
})