# Portable Tech Team Deep Dive - Data Modeling with TypeScript

## Introduction

We'll be looking at a simple data modeling exercise which is
designed to demonstrate the strengths of TypeScript and what you
might be able to consider when building your applications in
future.

Some of the topics that will be covered include:
* Data modeling
* Generics
* The <Option> or <Maybe> type
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
* Implement the `printRental` function
* Refactoring the `printRental` function
* Model a deck of cards

### Getting Started

You will need NodeJS and Yarn installed on your machine.

Once you have that, to install all dependencies, run `yarn`.

Running `yarn start` will run the application.

### What's the problem with Rentals?

Let's take a look at our small rental application.

From a business perspective there are 3 states:
* No option selected
* Option selected but not described
* Option selected and described

### Implement the `printRental` function



### Refactoring the `printRental` function

...

### Model a deck of cards

...

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


