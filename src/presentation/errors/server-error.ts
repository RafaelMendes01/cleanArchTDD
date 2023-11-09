export class ServerError extends Error {
  constructor () {
    super('internal server Error')
    this.name = 'ServerError'
  }
}
