import { Base } from './base'

class InvalidCurrencyError extends Base {
  errors: any;

  constructor (errors) {
    super('Invalid Currency Error')
    this.errors = errors
  }
}

export default InvalidCurrencyError
