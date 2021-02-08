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
// Here are the types for the rental model that we'll be working
// with today.
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
// Here is some sample data records that you can experiment with.

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

function isNone(x: Option<never>): x is None {
  return x._tag === "None";
}

function isSome(x: Option<any>): x is Some<any> {
  return x._tag === "Some";
}

// EXERCISE 1
const rentalToString = (rental: Rental): string => {
  // TODO: Implement the function that will return a customised
  // string containing each of the possible elements.
  // eg. date + id + name + description
  //
  // Hint: You will need to either write a guard clause or
  // use a switch statement in order to access the values
  // in a union type.
  
  // Exercise 1:
  // const id = isSome(rental.option) ? rental.option.value.id : '';
  // const name = isSome(rental.option) ? rental.option.value.name : '';
  // const description = isSome(rental.option) && isSome(rental.option.value.description) ? rental.option.value.description.value : '';

  // function assertNever(x: never): never {
  //   throw new Error("Unexpected object: " + x);
  // }
  
  // return "TODO: " + rental.date + id + name + description;

  // Exercise 2:
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
