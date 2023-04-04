//const and let ECMASCRIPT 6
//warning with VAR

function fruits() {
    if(true) {
        var fruit = 'Apple';// function scope
        let fruit2 = "Pineapple" //block scope
        const fruit3 = "Watermelon"//block scope
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit);
}
fruits();