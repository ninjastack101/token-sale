import BigNumber from 'bignumber.js'
import findConversionFactor from './conversionFactor'
import logger from '../utils/logger'

const computeSale = (validatedUsdRates, validatedSalesCases) => {
  return validatedSalesCases.map((validatedCase) => {
    let result = new BigNumber(null, null)
    let finalResult: string
    const { ethRate, purchaseAmount, currencyType, decimals } = validatedCase.purchase
    const ethSaleRateBig = new BigNumber(ethRate)
    const purchaseAmountBig = new BigNumber(purchaseAmount)
    const nonEthUsdBig = new BigNumber(validatedUsdRates.rates[currencyType])
    const ethUsdBig = new BigNumber(validatedUsdRates.rates.ETH)
    result = ethSaleRateBig.times(purchaseAmountBig)
    result = result.times(findConversionFactor(currencyType, nonEthUsdBig, ethUsdBig))
    finalResult = result.toFormat(Number(decimals), BigNumber.ROUND_DOWN).toString()
    logger.info(finalResult)
    return finalResult
  })
}

export default computeSale
