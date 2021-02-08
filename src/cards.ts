type Suit = "diamonds" | "clubs" | "spades" | "hearts";

type Rank =
  | "Ace"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K";

type RankCard = {
  _tag: "rank";
  suit: Suit;
  rank: Rank;
};

type JokerCard = { _tag: "joker" };

type Card = RankCard | JokerCard;

type CardDeck = Card[];

const deck: CardDeck = [];
deck.push({ _tag: "rank", rank: "10", suit: "hearts" });
deck.push({ _tag: "joker" });
deck.forEach((card) => {
  switch (card._tag) {
    case "rank":
      const { rank, suit } = card;
      console.log(`${rank} of ${suit}`);
      break;
    case "joker":
      console.log("it's da joker baby");
      break;
  }
});
