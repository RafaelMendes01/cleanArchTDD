import { InvalidParamError, MissingParamError } from '../errors'
import { badRequest, serverError } from '../helpers/http-helper'
import { Controller, EmailValidator, HttpRequest, HttpResponse } from '../protocols'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator
  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse | any {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { password, passwordConfirmation, email } = httpRequest.body
      const isValid = this.emailValidator.isValid(email)
      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }
      if (!isValid) return badRequest(new InvalidParamError('email'))
    } catch (error) {
      return serverError()
    }
  }
}
