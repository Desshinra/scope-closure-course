function greeting() {
    let userName = 'Ana'; //Local scope or Function scope
    console.log(userName);

    if(userName === 'Ana') {
        console.log(`Hello ${userName}!`);
    } else {'error'}
}

greeting();
console.log(userName); //scope error