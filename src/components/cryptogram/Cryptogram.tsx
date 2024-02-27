import { NewLineKind } from 'typescript'

import { MAX_CHALLENGES } from '../../constants/settings'
import { Cypher } from '../../lib/cipher'
import { Cell } from './Cell'

//import { Letter } from '../alphabet/Letter'

type Props = {
  cipher: Cypher
  solution: string
  isRevealing?: boolean
  currentRowClassName: string
}

export const Cryptogram = ({
  cipher,
  solution,
  isRevealing,
  currentRowClassName,
}: Props) => {
  const words = solution.toLocaleUpperCase().split(/\s/)
  console.log('words are', words)

  function renderLetter(value: string, i: number) {
    if (/\s/.test(value)) {
      return <div test-id="letter">{value}</div>
    }

    return (
      //<span test-id="letter"> {value}</span>
      <Cell
        encryptedValue={cipher[value].encrypted || value}
        value={cipher[value].guesses[0]}
      ></Cell>
    )
  }

  function renderWord(word: string) {
    console.log('renderword', word)
    return (
      <div test-id="word" className="mr-4 whitespace-nowrap">
        {word.split('').map(renderLetter)}
      </div>
    )
  }

  const stylePhrase = {
    width: '100%',
  }

  return (
    <div
      test-id="phrase"
      className="mb-1 flex flex-wrap justify-center"
      style={stylePhrase}
    >
      {words.map(renderWord)}
    </div>
  )
}
