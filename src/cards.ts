type Suit = 'Diamonds' | 'Hearts' | 'Clubs' | 'Spades'

type NumberCard = {
    kind: "NumberCard",
    rank:  2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
    suit: Suit,
}
type FaceCard = {
    kind: "FaceCard",
    rank: 'ace' | 'jack' | 'queen' | 'king',
    suit: Suit
}
type Joker = {
    kind: "Joker",
}

type Card = NumberCard | FaceCard | Joker;

type Deck = Array<Card>

const twoOfClubs:Card = {
    kind: "NumberCard",
    rank: 2,
    suit: "Clubs",
}