namespace Exercise1 {
  interface None {
    readonly _tag: 'None'
  }

  interface Some<A> {
    readonly _tag: 'Some'
    readonly value: A
  }

  type Option<A> = None | Some<A>

  const none: Option<never> = { _tag: 'None' }
  const some = <A>(a: A): Option<A> => ({ _tag: 'Some', value: a })

  const assertNever = (x: never): never => {
    throw new Error(x)
  }

  type Rental =
    { date: Date
    , option: Option<RentalOption>
    }

  type RentalOption =
    { name: string
    , id: string
    , description: Option<string>
    }


  const rental1: Rental =
    { date: new Date("2020-12-09")
    , option: none
    }

  const rental2: Rental = {
    date: new Date("2018-04-21"),
    option: some(
      { name: "Kia Rio 2015"
      , id: "K-RIO-2015"
      , description: none
      }
    )
  }

  const rental3: Rental = {
    date: new Date("1987-08-12"),
    option: some(
      { name: "Datsun 280Z"
      , id: "D-280Z-1982"
      , description: some("3-door two-seat coupe")
      }
    )
  }

  const rentalToString = (rental: Rental): string => {
    const date = rental.date.toISOString()

    switch (rental.option._tag) {
      case "Some":
        switch (rental.option.value.description._tag) {
          case "Some":
            var { id, name } = rental.option.value
            const description = rental.option.value.description.value
            return [ date, id, name, description ].join(' - ')
          case "None":
            var { id, name } = rental.option.value
            return [ date, id, name, "No description" ].join(' - ')
          default:
            return assertNever(rental.option.value.description)
        }
      case "None":
        return [ date, "No information available" ].join(' - ')
      default:
        return assertNever(rental.option)
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
