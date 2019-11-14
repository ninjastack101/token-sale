import exchangeRateParser from './parsers/exchangeRateParser'
import salesCasesParser from './parsers/salesCasesParser'
import { INPUTLINES } from '../lib/constants'
import computeSale from '../lib/computeSale'
import logger from '../utils/logger'

const parseInput = async (inputs: any) => {
  const { exchangeRates, salesQueries } = splitInputs(inputs) // NAME CHANGE : DONE
  const validatedUsdRates = await exchangeRateParser(exchangeRates) // CAPS
  const validatedSalesCases = await salesCasesParser(salesQueries)
  computeSale(validatedUsdRates, validatedSalesCases)
}

const splitInputs = (inputs) => {
  const exchangeRates = inputs[INPUTLINES.exchangeRates]
  inputs.shift()
  const salesQueries = [...inputs]
  return { exchangeRates, salesQueries } // CHNAGE NAME
}

export default parseInput
