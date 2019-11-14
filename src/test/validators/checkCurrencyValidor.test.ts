import * as chai from 'chai'
import { assert } from 'chai'
import * as sinon from 'sinon'
import awiatCatch from 'await-to-js'
import checkCurrencyValidator from '../../utils/validators/checkCurrencyValidator'
import chaiHttp = require('chai-http');

var sinonStubPromise = require('sinon-stub-promise')
sinonStubPromise(sinon)

chai.should()
chai.use(chaiHttp)

describe('Validate Character', () => {
  const input = { currencyType: 'DOGE' }
  const fake = { currencyType: 'dfg' }

  it('Should validate input', async () => {
    const validate = await checkCurrencyValidator(input)
    assert.typeOf(validate, 'undefined')
  })

  it('Should Return an error', async () => {
    const [error, result] = await awiatCatch(checkCurrencyValidator(fake))
    assert.isNotNull(error, 'Returns an error')
  })
})
