import { Base } from './base'

class NegativeValueError extends Base {
  errors: any;

  constructor (errors) {
    super('Negative Value Error')
    this.errors = errors
  }
}

export default NegativeValueError
