function camelize (str) {
  return str.replace(
    /(?:^\w|[A-Z]|\b\w|\s+)/g,
    (match, index) => {
      if (Number(match) === 0) {
        return ''
      } // Or if (/\s+/.test(match)) for white spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase()
    }
  )
}

const images = require.context(
  './../assets/images',
  true,
  /\.(png|jpe?g|svg)$/
)

const obj = {}
images.keys().forEach((key) => {
  const keyName = key
    .split('./')
    .pop() // Remove the first 2 characters
    .substring(
      0,
      key.length - 6
    ) // Remove the file extension
  obj[camelize(keyName)] = images(key)
})
