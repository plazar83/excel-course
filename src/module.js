console.log('module.js')

async function star() {
  return await Promise.resolve('async await working')
}

star().then(console.log)
