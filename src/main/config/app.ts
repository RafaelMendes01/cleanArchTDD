import setupMiddlewares from './middleware'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express')

const app = express()
setupMiddlewares(app)
export default app
