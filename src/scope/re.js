var firstName; //undefined //Statement
firstName = 'Oscar'; //assignement
console.log(firstName);

var lastName = 'David' //statement and assignement
lastName = 'Anita' //reassignement
console.log(lastName);

var secondName = 'Julio' //statement and assignement
var secondName = 'Rogelio' //Redeclaration
console.log(secondName);

//NEW laws
//We can't redeclare


//Let

let fruit = 'Apple'; //statement and assignement
fruit = 'Kiwi'; //reassignement


//Const
//We can't reassign

const animal = 'dog'; //statement and assignement
animal = 'cat'; //error becouse CONST can't reassign

const vehicles = [];
vehicles.push('😊');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);