import * as chai from 'chai'
import { assert } from 'chai'
import * as sinon from 'sinon'
import { convert } from '../../lib/currencyConvert'
import chaiHttp = require('chai-http');

var sinonStubPromise = require('sinon-stub-promise')
sinonStubPromise(sinon)

chai.should()
chai.use(chaiHttp)

describe('Validate Character', () => {
  const currency1 = { s: 1, e: 2, c: [138, 89110000000000] }
  const currency2 = { s: 1, e: 2, c: [138, 89110000000000] }

  it('Should validate input', () => {
    const validate = convert(currency1, currency2)
    assert.typeOf(validate, 'object')
  })
})
