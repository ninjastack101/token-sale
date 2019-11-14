import * as chai from 'chai'
import { assert } from 'chai'
import * as sinon from 'sinon'
import awiatCatch from 'await-to-js'
import checkMissingValidator from '../../utils/validators/checkMissingValidator'
import chaiHttp = require('chai-http');

var sinonStubPromise = require('sinon-stub-promise')
sinonStubPromise(sinon)

chai.should()
chai.use(chaiHttp)

describe('Validate Character', () => {
  const input = {
    ethRate: '1.5',
    decimals: '3',
    currencyType: 'BTC',
    purchaseAmount: '3.5'
  }
  const fake = {
    ethRate: 'sffe'
  }

  it('Should validate input', async () => {
    const validate = await checkMissingValidator(input)
    assert.typeOf(validate, 'undefined')
  })

  it('Should Return an error', async () => {
    const [error, result] = await awiatCatch(checkMissingValidator(fake))
    assert.isNull(error, 'Returns an error')
  })
})
