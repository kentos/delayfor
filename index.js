module.exports = (ms) => new Promise((res, rej) => {
  if (!ms) {
    return rej('No delay time given')
  }
  if (!parseInt(ms, 10)) {
    return rej('ms must be int')
  }
  const settle = () => {
    return res()
  }
  setTimeout(settle, ms)
})
