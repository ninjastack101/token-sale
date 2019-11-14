import * as chai from 'chai'
import { assert } from 'chai'
import * as sinon from 'sinon'
import * as exchangeRateValidator from '../../utils/validators/rateValidator'
import exchangeRateParser from '../../utils/parsers/exchangeRateParser'
import chaiHttp = require('chai-http');

var sinonStubPromise = require('sinon-stub-promise')
sinonStubPromise(sinon)

chai.should()
chai.use(chaiHttp)

describe('Exchange rates', () => {
  let stub

  before(() => {
    stub = sinon.stub(exchangeRateValidator, 'default')
  })

  it('Should exchange the rates', () => {
    stub.resolves({ insureds: 'results103' })
    const validatedUsdRates = exchangeRateParser('3825.281112 138.8911 0.00198422341298374987')
    assert.typeOf(validatedUsdRates, 'object')
  })

  it('Should check for errors', () => {
    stub.resolves({ errors: [{ errors: 'results103' }, { errors: 'results103' }] })
    const validatedUsdRates = exchangeRateParser('1.5 1 ETH')

    assert.typeOf(validatedUsdRates, 'object')
  })
})
