import BigNumber from 'bignumber.js'

const convert = (currency1, currency2) => {
  const currency1Big = new BigNumber(currency1)
  const currency2Big = new BigNumber(currency2)
  return currency1Big.dividedBy(currency2Big)
}

export {
  convert
}
