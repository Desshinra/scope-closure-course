//lexical ambit meanings that the accesibility of variables is determinated by position nested scopes 
const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function myFunction2() { //internal function
        const inner = 2;
        console.log(myNumber, myGlobal);

        function myFunction3() {
            console.log(inner, myNumber, myGlobal);
        }
        return myFunction3();
    }
    return myFunction2();
}

myFunction();