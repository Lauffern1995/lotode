# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lauffern/lotide`

**Require it:**

`const _ = require('@lauffern/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* const head   = require('./head');  discription: Returns first element of array
* const tail   = require('./tail');  discription: Removes first element of array and returns the remaining elements
* const middle = require('./middle') discription: Returns middle element(s) of array. Single element if array length is odd. 2 elements if array length is even. 