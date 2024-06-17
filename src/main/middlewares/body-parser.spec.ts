import request from 'supertest'
import app from '../config/app'

describe('Body Parser Middleware', () => {
  test('', async () => {
    app.post('/', (req: any, res: any) => {
      res.send(req.body)
    })
    await request(app)
      .post('/teste_body_parser')
      .send({ name: 'Rodrigo' })
      .expect({ name: 'Rodrigo' })
  })
})
