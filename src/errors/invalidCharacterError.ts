import { Base } from './base'

export class InvalidCharacterError extends Base {
  errors: any;

  constructor (errors) {
    super('Invalid Character Error')
    this.errors = errors
  }
}

export default InvalidCharacterError
