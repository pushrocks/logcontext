import { expect, tap } from 'tapbundle'
import * as logcontext from '../ts/index'

tap.test('first test', async () => {
  console.log(logcontext.standardExport)
})

tap.start()
