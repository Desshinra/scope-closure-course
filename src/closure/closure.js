function greeting() {
    let username = 'Amado'

    function displayUserName() {
        return `Hello ${username}`;
    }

    return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());

const a = (a, b) => a + b;

