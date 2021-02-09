namespace Exercise2 {
  const assertNever = (x: never): never => {
    throw new Error(x)
  }

  // DATA MODELS
  type Rental = RentalNoOption | RentalWithOption | RentalWithOptionDescribed;

  type RentalBase = {
    date: Date,
  }

  type RentalNoOption = RentalBase & {
    _tag: 'RentalNoOption',
  }

  type RentalWithOption = RentalBase & {
    _tag: 'RentalWithOption',
    option: RentalOptionNotDescribed
  }

  type RentalWithOptionDescribed = RentalBase & {
    _tag: 'RentalWithOptionDescribed',
    option: RentalOption
  }

  type RentalOptionNotDescribed = {
    name: string,
    id: string,
  }

  type RentalOption = { 
    description: string
  } & RentalOptionNotDescribed;


  // SAMPLE RECORDS
  const rental1: RentalNoOption = {
    _tag: 'RentalNoOption',
    date: new Date("2020-12-09"),
  }

  const rental2: RentalWithOption = {
    _tag: 'RentalWithOption',
    date: new Date("2018-04-21"),
    option: {
      name: "Kia Rio 2015",
      id: "K-RIO-2015",
    }
  }

  const rental3: RentalWithOptionDescribed = {
    _tag: 'RentalWithOptionDescribed',
    date: new Date("1987-08-12"),
    option: {
      name: "Datsun 280Z",
      id: "D-280Z-1982",
      description: "3-door two-seat coupe"
    }
  }

  // EXERCISE 1
  const rentalToString = (rental: Rental): string => {
    let rentalString = "TODO: "

    switch(rental._tag) {
      case 'RentalNoOption': 
      rentalString = rentalString.concat(rental.date.toString());
        return rentalString;
      case 'RentalWithOption':
        rentalString = rentalString.concat(`${rental.date.toString()} ${rental.option.id} ${rental.option.name}`);
        return rentalString;
      case 'RentalWithOptionDescribed':
        rentalString = rentalString.concat(`${rental.date.toString()} ${rental.option.id} ${rental.option.name} ${rental.option.description}`);
        return rentalString;
      default:
        assertNever(rental);
        return '';
    }
  }

  // APPLICATION
  export const runApplication = () => {
    console.log('\nEXERCISE 2:\n')
    const getRentals = [rental1, rental2, rental3]

    for (let rental of getRentals) {
      console.log(rentalToString(rental))
    }
  }
}

export default Exercise2;
