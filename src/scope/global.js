//variables

var a; //stating
var b = "b"; //stating/assign
b = 'bb';// reasignation
var a = 'AA'; //redeclaration

//global scope
var fruit = 'Apple'; //global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'colombia'; //global
    console.log(country);
}

countries();
console.log(country);