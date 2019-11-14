import { Base } from './base'

class MissingValueError extends Base {
  errors: any;

  constructor (errors) {
    super('Missing Value Error')
    this.errors = errors
  }
}

export default MissingValueError
