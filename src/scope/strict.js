/*  STRICT MODE
strict mode was incorporated in EcmaScript5
strictly enforces certain laws to meet standars */
'use strict';

pi = 3.1416; //error by strict mode
console.log(pi);

function myFunction() {
    'use strict';
    return pi = 3.1416 //error by strit mode
}

console.log(myFunction());