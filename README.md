# Portable Tech Team Deep Dive - Data Modeling with TypeScript

## Introduction

We'll be looking at a simple data modeling exercise which is
designed to demonstrate the strengths of TypeScript and what you
might be able to consider when building your applications in
future.

Some of the topics that will be covered include:
* Data modeling
* Generics
* The `<Option>` or `<Maybe>` type
* Union types

If you have not used TypeScript before in the past, have no fear -
there are many similarities to Javascript and other languages that
you may have worked with. The exercises will also have the
appropriate reference material along with annotated code
explaining what is happening.

If you have any queries about what the above topics mean, there is a
small glossary at the bottom of the page.

## Agenda

* Getting started
* What's the problem with Rentals?
* Implement the `rentalToString` function
* Refactoring the `rentalToString` function
* Model a deck of cards

### Getting Started

You will need NodeJS and Yarn installed on your machine.

Once you have that, to install all dependencies, run `yarn`.

Running `yarn start` will run the application.

Documentation pages of interest:
https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#discriminating-unions
https://www.typescriptlang.org/docs/handbook/generics.html

### What's the problem with Rentals?

We have a small Rental application which is designed to print a
human-readable and friendly formatted string to a user via the console.

We have some initial types and modeling that has been done for us, but
we are missing the implementation of the most critical function, to
actually format the `Rental` data model to a string!


### Implement the `rentalToString` function

Follow exercise 1 in `app.js`


### Refactoring the `rentalToString` function

Follow exercise 2 in `app.js`

### Model a deck of cards

If you have finished those two challenges, try to model a standard
playing deck of cards so that it is impossible to construct an `invalid`
card.

Hint: How do you represent the Joker?

## Fin

To learn more about data modeling and how it can help improve your
control flow and application logic, ...

## Glossary

### Data modeling

The process that you undertake to turn a representation of data into
either a computational or a physical model.

### Generics

This is a programming language feature that refers to an ability for
the language to not determine a concrete type for a given
parameter or return value, so you can use that generic type to
create more specific instances of other types.

### Option or Maybe type


`Option<T>` is a type that represents two states:
* either there is a value;
* or there isn't

An example of this would be `Option<string>` - if a value has this
type, there will either be a string available or there will be
nothing.

Also note that `Option<T>` is a generic type, allowing you to
specify any particular concrete type for `<T>`.

### Union Types

This idea is that a value can represent multiple concrete types -
eg. number || string || Date.


