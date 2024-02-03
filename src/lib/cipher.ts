const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const keys = [...alphabet]

export const newCipher = () => {
  const values = alphabet.sort(() => (Math.random() > 0.5 ? 1 : -1))

  let cipher = []
  for (let index in keys) {
    cipher = [...cipher, { key: keys[index], value: values[index] }]
  }

  return cipher
}

export const encodePhrase = ({ cypher, phrase }) => {
  const encoded = phrase.toLocaleUpperCase().split('')
  for (let index in encoded) {
    const letter = encoded[index]
    const encodedLetter =
      cypher.find(({ key }) => key === letter)?.value || letter
    if (encodedLetter !== -1) {
      encoded[index] = encodedLetter
    }
  }
  return encoded.join('')
}
