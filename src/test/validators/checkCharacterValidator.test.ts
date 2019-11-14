import * as chai from 'chai'
import { assert } from 'chai'
import * as sinon from 'sinon'
import awiatCatch from 'await-to-js'
import checkCharacterValidator from '../../utils/validators/checkCharacterValidator'
import chaiHttp = require('chai-http');

var sinonStubPromise = require('sinon-stub-promise')
sinonStubPromise(sinon)

chai.should()
chai.use(chaiHttp)

describe('Validate Character', () => {
  const input = { BTC: '3825.281112', ETH: '138.8911', DOGE: '0.00198422341298374987' }
  const fake = { BTC: 'jhfudej' }

  it('Should validate input', async () => {
    const validate = await checkCharacterValidator(input)
    assert.typeOf(validate, 'undefined')
  })

  it('Should Return an error', async () => {
    const [error, result] = await awiatCatch(checkCharacterValidator(fake))
    assert.isNotNull(error, 'Returns an error')
  })
})
