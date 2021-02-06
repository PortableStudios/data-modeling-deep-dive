import * as A from 'fp-ts/lib/Array'
import { pipe } from 'fp-ts/lib/function'

namespace Exercise3 {
  type Suit = 'hearts' | 'spades' | 'diamonds' | 'clubs'
  type Rank = 'ace' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' | 'nine' | 'ten' | 'jack' | 'queen' | 'king'

  interface StandardCard {
    suit: Suit
    rank: Rank
  }

  type Joker = 'joker'

  type Card = StandardCard | Joker

  type Deck = Card[]

  const createCard = (suit: Suit) => (rank: Rank): Card => ({rank: rank, suit: suit})

  const createDeck = (): Deck => {
    const suit: Suit[] = ['hearts', 'spades', 'diamonds', 'clubs']
    const rank: Rank[] = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

    const joker: Joker = 'joker'
    const standardCards = pipe(
      A.of(createCard),
      A.ap(suit),
      A.ap(rank)
    )

    return [...standardCards, joker, joker]
  }

  export const runApplication = () => {
    console.log(createDeck())
  }
}

export default Exercise3
