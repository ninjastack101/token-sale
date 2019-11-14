import { Base } from './base'

class ZeroValueError extends Base {
  errors: any;

  constructor (errors) {
    super('Zero Value Error')
    this.errors = errors
  }
}

export default ZeroValueError
