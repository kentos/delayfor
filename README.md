# delayfor
Promise that will resolve after X ms

# Usage
```
async function foobar() {
  ...
  await delayfor(250)
  ...
}
```
Could also be used as a promise
```
delayfor(250).then(
  () => console.log('resolved!')
)
```