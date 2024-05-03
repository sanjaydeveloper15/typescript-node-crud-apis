import express from "express"
// import { verifyApiKey } from "../middlewares/authMiddleware.js"
import userRoute from "./user.route.js"
import swaggerUi from 'swagger-ui-express'
// import swaggerJson from '../../../../swagger-docs.json'

const swaggerDocument = {
    "openapi": "3.0.0",
    "info": {
      "title": "TypeScript Node CRUD",
      "version": "1.0.0"
    },
    "servers": [
      {
        "url": "http://localhost:5003/api/v1"
      }
    ],
    "tags": [
      {
        "name": "User",
        "description": "User related CRUD apis."
      }
    ],
    "paths": {
      "/user/create": {
        "post": {
          "tags": [
            "User"
          ],
          "summary": "/user/create",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "example": {
                    "name": "Sanjay Kumar",
                    "email": "sanjay.kumar@tataaig.com",
                    "countryCode": "91",
                    "mobile": "9971167015"
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Successful response",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/user/list": {
        "get": {
          "tags": [
            "User"
          ],
          "summary": "/user/list",
          "responses": {
            "200": {
              "description": "Successful response",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/user/update": {
        "put": {
          "tags": [
            "User"
          ],
          "summary": "user/update",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "example": {
                    "userId": "663105e645c2e4af5d7529fa",
                    "name": "Sanjay Kumar",
                    "email": "sanjay.kumar14@tataaig.com",
                    "countryCode": "91",
                    "mobile": "9971167015"
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Successful response",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/user/remove": {
        "delete": {
          "tags": [
            "User"
          ],
          "summary": "/user/remove",
          "responses": {
            "200": {
              "description": "Successful response",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      }
    }
  }

// const swaggerDocument = swaggerJson

const router = express.Router()

router.get('/',(req,res)=>{
    res.send(`${process.env.APP_NAME}: Version 1 API's`)
})

router.use("/docs", swaggerUi.serve)
router.get("/docs", swaggerUi.setup(swaggerDocument), () => {
  // #swagger.ignore = true
})

// router.use(verifyApiKey) // add in all the below routes

router.use("/user", userRoute)

export default router
