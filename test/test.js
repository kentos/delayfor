const assert = require('assert')
const delayfor = require('../index.js')

it('should fail if no arg', async () => {
  try {
    await delayfor()
    assert(0)
  } catch (e) {
    assert(e === 'No delay time given')
  }
})

it('should fail if not int', async () => {
  try {
    await delayfor('monkey')
    assert(0)
  } catch (e) {
    assert(e === 'ms must be int')
  }
})

it('should wait for 50 ms', async () => {
  const before = (new Date()).getTime()
  await delayfor(50)
  const after = (new Date()).getTime()
  assert(after - before > 49)
})
