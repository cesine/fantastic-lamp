const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const keys = [...alphabet]

export type Cypher = {
  [key: string]: {
    encrypted: string
    guesses: string[]
  }
}

export const newCipher = (): Cypher => {
  const values = alphabet.sort(() => (Math.random() > 0.5 ? 1 : -1))

  let cipher: Cypher = {}
  for (let index in keys) {
    console.log('looking at ', index)
    const i = parseInt(index, 10)
    cipher[keys[i]] = {
      encrypted: values[i],
      guesses: [],
    }
  }

  return cipher
}

export const encodePhrase = ({
  cypher,
  phrase,
}: {
  cypher: Cypher
  phrase: string
}) => {
  const encoded = phrase.toLocaleUpperCase().split('')
  for (let index in encoded) {
    const letter = encoded[index]
    const encodedLetter = cypher[letter]?.encrypted || letter
    encoded[index] = encodedLetter
  }
  return encoded.join('')
}
