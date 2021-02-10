// INTRODUCTION
//
// We'll run through what each of these interfaces and helper functions are for
// and why we might want to use them.

// This `None` interface represents a value that is non-existent. It
// doesn't contain another value that we can access at a later time.
interface None {
  readonly _tag: 'None'
}

// This `Some<A>` interface represents a guaranteed value. We don't
// know what the type of that value will be but we know that it
// exists acording to this interface.
interface Some<A> {
  readonly _tag: 'Some'
  readonly value: A
}

// This `Option<A>` type represents a value in which there is no
// value or that the is definitely a value.
type Option<A> = None | Some<A>

// These two functions `none` and `some(a)` are helper methods so
// that you can construct a value with the valid type of
// `Option<T>.`
const none: Option<never> = { _tag: 'None' }
const some = <A>(a: A): Option<A> => ({ _tag: 'Some', value: a })

// This `assertNever(x)` function is to help the compiler enforce
// the exhaustiveness check when working with union types.
const assertNever = (x: never): never => {
  throw new Error(x)
}



// DATA MODELS
//
// Here are the types for the rental model that we'll be working
// with today.
type Rental =
  { date: Date
  , option: Option<RentalOption>
  }

type RentalOption =
  { name: string
  , id: string
  , description: Option<string>
  }



type TRentalNoOption = {
  _tag: "TRentalNoOption"
  date: Date
}

type TRentalOptionNotDescribed = {
  _tag: "TRentalOptionNotDescribed"
  date: Date
  name: string
  id: string
}

type TRentalOptionDescribed = {
  _tag: "TRentalOptionDescribed"
  date: Date
  name: string
  id: string
  description: string
}
type TRental = TRentalNoOption | TRentalOptionNotDescribed | TRentalOptionDescribed;

// SAMPLE RECORDS
// Here is some sample data records that you can experiment with.
const rental1: TRental = {
  _tag: "TRentalNoOption",
  date: new Date("2020-12-09"),
}

const rental2: TRental = {
  date: new Date("2018-04-21"),
  _tag: "TRentalOptionNotDescribed",
  name: "Kia Rio 2015",
  id: "K-RIO-2015",
}

const rental3: TRental = {
  date: new Date("1987-08-12"),
  _tag: "TRentalOptionDescribed",
  name: "Datsun 280Z",
  id: "D-280Z-1982",
  description: "3-door two-seat coupe",
}




// EXERCISE 1
const rentalToString = (rental: TRental): string => {
  // TODO: Implement the function that will return a customised
  // string containing each of the possible elements.
  // eg. date + id + name + description
  //
  // Hint: You will need to either write a guard clause or
  // use a switch statement in order to access the values
  // in a union type.
  switch (rental._tag){
    case "TRentalNoOption":
      return `${rental.date}: No option`
    case "TRentalOptionNotDescribed":
      return `${rental.date}: ${rental.id} ${rental.name}`;
    case "TRentalOptionDescribed":
      return `${rental.date}: ${rental.id} ${rental.name} ${rental.description}`;
  }
  // if (rental.option._tag==='Some'){
  //   if (rental.option.value.description._tag === 'Some'){
  //     return `${rental.date}: ${rental.option.value.id} ${rental.option.value.name} ${rental.option.value.description.value}`;
  //   }
  //   return `${rental.date}: ${rental.option.value.id} ${rental.option.value.name}`;
  // }else{
  //   return `${rental.date}: No option`
  // }
  
  //return "TODO: " + rental
}

// EXERCISE 2
//
// TODO: Once you have completed the function to format the Rental to a string,
// refactor the data models for Rental and RentalOption so that you represent
// only the following 3 states:
//   1. No option selected
//   2. Option selected but not described
//   3. Option selected and described
//
// Once you have your newly refactored `Rental` data model, your
// `rentalToString` function will need to be refactored also.
//
// Hint: You may need to create some additional interfaces to represent the 3
// states.


// APPLICATION
//
// This application gets a list of rentals and displays
// them in a display-friendly format in the console.
const runApplication = () => {
  const getRentals = [rental1, rental2, rental3]

  for (let rental of getRentals) {
    console.log(rentalToString(rental))
  }
}

runApplication()
