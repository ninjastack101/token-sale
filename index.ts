import { createInterface } from 'readline'
import parseInput from './src/utils'

const inputs = []

const rl = createInterface({
  input: process.stdin
})
rl.on('line', (line) => {
  inputs.push(line)
})
rl.on('close', () => {
  parseInput(inputs)
})
