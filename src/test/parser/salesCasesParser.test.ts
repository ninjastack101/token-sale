import * as chai from 'chai'
import { assert } from 'chai'
import * as sinon from 'sinon'
import * as validateInputCases from '../../utils/validators/inputQueryValidator'
import salesCasesParser from '../../utils/parsers/salesCasesParser'
import chaiHttp = require('chai-http');

var sinonStubPromise = require('sinon-stub-promise')
sinonStubPromise(sinon)

chai.should()
chai.use(chaiHttp)

describe('Sales Cases', () => {
  let stub

  before(() => {
    stub = sinon.stub(validateInputCases, 'default')
  })

  it('Should Validate Sales Cases', async () => {
    stub.resolves({ insureds: 'results103' })
    const validatedSalesCases = await salesCasesParser([
      '1.5 3 ETH 3.5',
      '1.5 3 BTC 3.5',
      '-1.5 3 DOGE 3.5',
      '1.5 3 DOGE 350000',
      '1.5 1 ETH 3.5'])
    assert.typeOf(validatedSalesCases, 'array')
  })

  it('Should check for errors', async () => {
    stub.resolves({ errors: [{ errors: 'results103' }, { errors: 'results103' }] })
    const validatedSalesCases = await salesCasesParser(['1.5 3 ETH 3.5',
      '1.5 3 BTC 3.5',
      '-1.5 3 DOGE 3.5',
      '1.5 3 DOGE 350000',
      '1.5 1 ETH 3.5'])
    assert.typeOf(validatedSalesCases, 'array')
  })
})
