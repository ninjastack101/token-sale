import { UsdExchangeRates } from '../../lib/usdExchangeRates'
import { INPUTQUERY, VALID_EXCHANGE_RATES_LENGTH } from '../../lib/constants'

import logger from '../logger'
import exchangeRateValidator from '../validators/rateValidator'
import MissingValueError from '../../errors/missingValueError'

const exchangeRateParser = (exchangeRates) => {
  let validatedUsdRates = {}
  const exchangeRatesArray = exchangeRates.split(' ')

  if (exchangeRatesArray.length !== VALID_EXCHANGE_RATES_LENGTH) {
    logger.error('Error occurred while parsing inputs : One of the values is missing')
    throw new MissingValueError('Invalid user input')
  }

  const usdRates = {
    BTC: '',
    ETH: '',
    DOGE: ''
  }
  usdRates.BTC = exchangeRatesArray[INPUTQUERY.ethSaleRate]
  usdRates.ETH = exchangeRatesArray[INPUTQUERY.decimalPlaces]
  usdRates.DOGE = exchangeRatesArray[INPUTQUERY.purchaseCurrency]

  logger.info('Validating UsdEchangeRate Object ')
  exchangeRateValidator(usdRates).then((result) => {
    if (result.errors) {
      result.errors.map((error) => {
        logger.error(error.errors + ' : ' + JSON.stringify(usdRates))
      })
    }
  })

  validatedUsdRates = new UsdExchangeRates(usdRates)
  return validatedUsdRates
}

export default exchangeRateParser
