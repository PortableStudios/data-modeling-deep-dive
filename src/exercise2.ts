namespace Exercise1 {
  const assertNever = (x: never): never => {
    throw new Error(x)
  }

  interface NoRentalOption {
    readonly _tag: 'no-rental'
    readonly date: Date
  }

  interface IncompleteRental {
    readonly _tag: 'incomplete-rental'
    readonly date: Date
    readonly name: string
    readonly id: string
  }

  interface CompleteRental {
    readonly _tag: 'complete-rental'
    readonly date: Date
    readonly name: string
    readonly id: string
    readonly description: string
  }

  type Rental =
    NoRentalOption | IncompleteRental | CompleteRental

  const rental1: Rental = {
    _tag: 'no-rental',
    date: new Date("2020-12-09")
  }

  const rental2: Rental = {
    _tag: 'incomplete-rental',
    date: new Date("2018-04-21"),
    name: "Kia Rio 2015",
    id: "K-RIO-2015"
  }

  const rental3: Rental = {
    _tag: 'complete-rental',
    date: new Date("1987-08-12"),
    name: "Datsun 280Z",
    id: "D-280Z-1982",
    description: "3-door two-seat coupe"
  }

  const rentalToString = (rental: Rental): string => {
    const date = rental.date.toISOString()

    switch (rental._tag) {
      case "no-rental":
        return [ date, "No information available" ].join(' - ')
      case "incomplete-rental":
        var { id, name } = rental
        return [ date, id, name, "No description" ].join(' - ')
      case "complete-rental":
        var { id, name, description } = rental
        return [ date, id, name, description ].join(' - ')
      default:
        return assertNever(rental)
    }
  }

  export const runApplication = () => {
    const getRentals = [rental1, rental2, rental3]

    for (let rental of getRentals) {
      console.log(rentalToString(rental))
    }
  }
}

export default Exercise1
