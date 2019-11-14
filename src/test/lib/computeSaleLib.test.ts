import * as chai from 'chai'
import { assert } from 'chai'
import * as sinon from 'sinon'
import computeSale from '../../lib/computeSale'
import chaiHttp = require('chai-http');

var sinonStubPromise = require('sinon-stub-promise')
sinonStubPromise(sinon)

chai.should()
chai.use(chaiHttp)

describe('Compute Sales', () => {
  const validatedUsdRates = {
    rates: {
      BTC: '3825.281112',
      ETH: '138.8911',
      DOGE: '0.00198422341298374987'
    }
  }
  const validatedSalesCases = [
    {
      purchase: {
        ethRate: '1.5',
        decimals: '3',
        currencyType: 'ETH',
        purchaseAmount: '3.5'
      }
    },
    {
      purchase: {
        ethRate: '1.5',
        decimals: '3',
        currencyType: 'BTC',
        purchaseAmount: '3.5'
      }
    }]

  it('Should Check for exchange rates and sales cases', () => {
    const finalResult = computeSale(validatedUsdRates, validatedSalesCases)
    assert.typeOf(finalResult, 'array')
  })
})
