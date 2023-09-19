const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");

let numberOfCookies = 0;
let costOfClickUpgrade = 20;
let clickUpgradeIncrease = 1;

// {} - scope
cookie.onclick = () => {
    console.log("click");
    //numberOfCookies = numberOfCookies + 1;
    //numberOfCookies += 1;
    // ++ inkrement
    numberOfCookies += clickUpgradeIncrease;
    console.log(numberOfCookies);
    counter.innerHTML = "sike Cats: " + numberOfCookies;
};

function clickUpgradeFunction () {
    if (numberOfCookies >= costOfClickUpgrade) {
        //odečteme cenu upgradu
        //pocet susenek a odectu 20
        numberOfCookies -= costOfClickUpgrade;

        //aktualizace odstavce
        counter.innerHTML = "sike Cats: " + numberOfCookies;
        //Zvedneme počet susenek na kliknuti
        clickUpgradeIncrease++;
    }
}

clickUpgrade.onclick = clickUpgradeFunction;

// Vztvoreni funkce
//function nazev()
function cheats () {
    console.log("Cheats online")
    numberOfCookies += 1000000;
    counter.innerHTML = "sike Cats: " + numberOfCookies;
}
//spusteni funkce
//cheats()

const cheatsTwo = () => {
    numberOfCookies *= 3;
    counter.innerHTML = "sike Cats: " + numberOfCookies;
}

//cheatsTwo();