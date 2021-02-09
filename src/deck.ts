export const AllSuits = ["diamonds", "clubs", "spades", "hearts" ] as const;
export type Suit = typeof AllSuits[number];

export const AllRanks = [
  "A",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
] as const;
export type Rank = typeof AllRanks[number];

export type RankCard = {
  _tag: "rank";
  suit: Suit;
  rank: Rank;
};

export type JokerCard = { _tag: "joker" };

export type Card = RankCard | JokerCard;

export class CardDeck {

    /* Generate all 54 available cards (A-K in each suit plus two jokers).
     */
    private static getInitialDeck(): Card[] {
        const cards: Card[] = [];
        AllSuits.forEach(suit => {
            AllRanks.forEach(rank => {
                cards.push({ _tag: 'rank', suit, rank });
            });
        });
        cards.push({ _tag: 'joker' });
        cards.push({ _tag: 'joker' });
        return cards;
    }

    public readonly cards: Card[];

    /* Create a new deck.
     */
    public constructor() {
        this.cards = CardDeck.getInitialDeck();
    }

    /* Shuffle the cards in the deck.
     */
    public shuffle() {
        this.cards.sort(() => Math.random() - 0.5);
    }

    /* Draw the next card from the deck and return it.
     */
    public draw(): Card {
        if (this.cards.length === 0) {
            throw new Error('Deck is empty');
        }
        return this.cards.shift()!;
    }
}

const assertNever = (arg: never): never => {
    throw new Error(`Unexpected value: ${arg}`);
};

const deck = new CardDeck();
deck.shuffle();
deck.cards.forEach(card => {
    switch (card._tag) {
        case "rank":
          const { rank, suit } = card;
          console.log(`${rank} of ${suit}`);
          break;
        case "joker":
          console.log("joker");
          break;
        default:
          assertNever(card);
      }
    
});



