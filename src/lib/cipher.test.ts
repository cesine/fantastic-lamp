import { encodePhrase, newCipher } from './cipher'

describe('cipher', () => {
  describe('newCipher', () => {
    it('should return a cipher of length 26', () => {
      const cipher = newCipher()
      expect(cipher.length).toBe(26)
    })

    it('should return a cipher with unique values', () => {
      const cipher = newCipher()
      const values = cipher.map((item) => item.value)
      const uniqueValues = [...new Set(values)]
      expect(values.length).toBe(uniqueValues.length)
    })
  })

  describe('encodePhrase', () => {
    it('should encode the phrase ', () => {
      const phrase = 'Break a leg'
      const cipher = newCipher()
      const encodedPhrase = encodePhrase({ cypher: cipher, phrase })
      expect(encodedPhrase).not.toBe(phrase)
      expect(encodedPhrase.length).toEqual(phrase.length)
      expect(encodedPhrase[5]).toEqual(' ')
    })
  })
})
