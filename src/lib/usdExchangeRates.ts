import * as _ from 'lodash'
import logger from '../utils/logger'
/**
* This class provides exchanges rates of currecies of a sale
*
* @public
* @class
*/
export class UsdExchangeRates {
    public rates: any = {
      BTC: '',
      ETH: '',
      DOGE: '' // from config
    };

    constructor (rates: Object) {
      logger.info(`Creating new UsdEchangeRate object for UsdEchangeRate = ${JSON.stringify(rates)}`)
      this.rates = Object.assign({}, rates)
    }
}
