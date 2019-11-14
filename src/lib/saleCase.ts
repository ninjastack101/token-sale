import logger from '../utils/logger'
const _ = require('lodash')

/**
* This class provides exchanges rates of currecies of a sale
*
* @public
* @class
*/
export class SaleCase { // name change
    public purchase = {
      ethRate: '',
      decimals: '',
      currencyType: '',
      purchaseAmount: ''
    };

    constructor (input) {
      this.purchase = Object.assign({}, input)
      logger.info(`Creating new salesCase object for salesCase = ${JSON.stringify(this.purchase)}`)
    }
}
