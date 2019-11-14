import { convert } from './currencyConvert'
import { currecyTypes } from './constants'

const findConversionFactor = (currency, otherUsd, EthUsd) => {
  switch (currency) {
    case currecyTypes.ETH:
      return 1
    case currecyTypes.BTC:
      return convert(otherUsd, EthUsd)
    case currecyTypes.DOGE:
      return convert(otherUsd, EthUsd)
  }
}
export default findConversionFactor
