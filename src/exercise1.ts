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

  type Rental = {
    date: Date,
    option: Option<RentalOption>
  };

  type RentalOption = {
    name: string,
    id: string,
    description: Option<string>
  }

  const rental1: Rental = {
    date: new Date("2020-12-09"),
    option: none
  }

  const rental2: Rental = {
    date: new Date("2018-04-21"),
    option: some(
      {
        name: "Kia Rio 2015",
        id: "K-RIO-2015",
        description: none
      }
    )
  }

  function isSome(x: Option<any>): x is Some<any> {
    return x._tag === "Some";
  }

  const rentalToString = (rental: Rental): string => {
    let rentalString = "TODO: "
    const id = isSome(rental.option) ? rental.option.value.id : '';
    const name = isSome(rental.option) ? rental.option.value.name : '';
    const description = isSome(rental.option) && isSome(rental.option.value.description) ? rental.option.value.description.value : '';

    return rentalString + rental.date + id + name + description;
  }

  // APPLICATION
  export const runApplication = () => {
    console.log('\nEXERCISE 1:\n')

    const getRentals = [rental1, rental2]

    for (let rental of getRentals) {
      console.log(rentalToString(rental))
    }
  }
}

export default Exercise1;
