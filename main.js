const str = `
010-123-45676
thetest@test.com
https://omdgapi.com/?apikey=7035c60&s=frozen
The quick brown fox jmps over the lazy dog.com
abbbccdddddeffffeg
`
//const regexp = new RegExp('the','gi')
const regexp = /the/gi
console.log(str.match(regexp))