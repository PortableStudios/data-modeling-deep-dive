namespace Exercise3 {
  type Rank = "Ace" | "two" | "three" | "four" | "five" | "six" | "seven" | "eight" | "nine" | "ten" | "Jack" | "Queen" | "King";

  type Suite = "Spade" | "Club" | "Diamond" | "Heart";

  type CardNotJoker = {
    option: CardOption.NotJoker,
    rank: Rank;
    suite: Suite;
  }

  type CardJoker = {
    option: CardOption.Joker,
    rank: "Joker"
    suite: undefined
  };

  enum CardOption {
    NotJoker = "NotJoker",
    Joker = "Joker"
  };

  type Card = CardNotJoker | CardJoker;

  export const isCardInDeck = (card: CardJoker | CardNotJoker): boolean => {
    console.log(card.option)
    switch (card.suite) {
      case "Heart":
        if (card.rank)
        return true;
      case Card.CardNotJoker:
        return true;
      default:
        assertNever(card);
        return false;
    }
    return false
  }
  // APPLICATION
  export const runApplication = () => {
    console.log('\nEXERCISE 3:\n')
    const getRentals = [
      {
        rank: "Joker",
        suite: undefined
      },
      {
        rank: "Queen",
        suite: "Heart"
      }
    ]

    for (let card of getRentals) {
      console.log("Is card? ", isCardInDeck(card as Card))
    }
  }
}

export default Exercise3;
