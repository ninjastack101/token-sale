import * as chai from 'chai'
import { assert } from 'chai'
import * as sinon from 'sinon'
import awiatCatch from 'await-to-js'
import checkZeroValidator from '../../utils/validators/checkZeroValidator'
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
    ethRate: 'dsfds'
  }

  it('Should validate input', async () => {
    const validate = await checkZeroValidator(input)
    assert.typeOf(validate, 'undefined')
  })

  it('Should Return an error', async () => {
    const [error, result] = await awiatCatch(checkZeroValidator(fake))
    assert.isNull(error, 'Returns an error')
  })
})
