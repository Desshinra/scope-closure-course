//  function moneyBox(coins) {
//      let saveCoins = 0;
//      saveCoins += coins;
//      console.log(`MoneyBox: $${saveCoins}`);

//  }

//  moneyBox(5);
//  moneyBox(5);



function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`moneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxSubject1 = moneyBox();

moneyBoxSubject1(150);
moneyBoxSubject1(150);
moneyBoxSubject1(300);