
const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([2,6,5]), 2);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");