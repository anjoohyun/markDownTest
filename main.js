const str = `
010-123-4567
thetest@test.com
https://omdgapi.com/?apikey=7035c60&s=frozen
he quick brown fox jumps over the lazy dog.
abbbccdddddeffffeg
`

console.log(
    str.match(/(?<=@).{1,}/g)
)