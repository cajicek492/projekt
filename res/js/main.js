const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoClicker = document.getElementById("autoClicker");
const grandMa = document.getElementById("grandMa");

let numberOfCookies = 0;
let costOfClickUpgrade = 20;
let clickUpgradeIncrease = 1;
let autoClickIncrease = 0;
let autoClickerI;
let autoClickerCost = 10;
let grandMaCost = 100;
let grandMaI;
let grandMaIncrease = 0;

autoClicker.onclick = () => {
    if (numberOfCookies>= autoClickerCost) {
        //odecist susenky
        numberOfCookies -= autoClickerCost;
        autoClickerCost *= 2;
        autoClicker.innerText = "Buy autoclicker: " + autoClickerCost;
        //akutalizovat susenky
        counter.innerHTML = "sike Cats: " + numberOfCookies;
        autoClickIncrease += 1;
        //clear
        clearInterval(autoClickerI);
        //spustit interval
        autoClickerI= setInterval(() => {
            //zvednout cislo
            numberOfCookies += autoClickIncrease;
            //aktualizovat odstavec
            counter.innerHTML = "sike Cats: " + numberOfCookies;
        }, 1000);
    }
}

grandMa.onclick = () => {
    if(numberOfCookies >= grandMaCost){
        numberOfCookies -= grandMaCost;
        grandMaCost *= 2;
        grandMa.innerText = "Buy Grany: " + grandMaCost;
        counter.innerHTML = "sike Cats: " + numberOfCookies;
        grandMaIncrease += 1;
        clearInterval(grandMaI);
        grandMaI = setInterval(() => {
            numberOfCookies += grandMaIncrease;
            counter.innerHTML = "sike Cats: " + numberOfCookies;
        },1000);
    }
}

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
    numberOfCookies += 1000;
    counter.innerHTML = "sike Cats: " + numberOfCookies;
}
//spusteni funkce
cheats()

const cheatsTwo = () => {
    numberOfCookies *= 3;
    counter.innerHTML = "sike Cats: " + numberOfCookies;
}

//cheatsTwo();