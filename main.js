// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let coffee = 120
let milk = 540
let water = 400
let cups = 9
let money = 550

function buyCoffee(){

    const waterForEspresso = 250, coffeeForEspresso = 16
    const waterForLatte = 350, milkForLatte = 75, coffeeForLatte = 20
    const waterForCapucino = 200, milkForCapucino = 100, coffeeForCapucino = 12

    console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:")
    let answer = input()

    if (answer == 1){
        if (water > waterForEspresso && coffee > coffeeForEspresso){
            water = water - waterForEspresso
            coffee = coffee - coffeeForEspresso
            cups--
            money = money + 4
        }
    }else if (answer == 2){
        if (water > waterForLatte && milk > milkForLatte && coffee > coffeeForLatte){
            water = water - waterForLatte
            coffee = coffee - coffeeForLatte
            milk = milk - milkForLatte
            cups--
            money = money + 7
        }
    }else if (answer == 3){
        if (water > waterForCapucino && milk > milkForCapucino && coffee > coffeeForCapucino){
            water = water - waterForCapucino
            milk = milk - milkForCapucino
            coffee = coffee - coffeeForCapucino
            cups--
            money = money + 6
        }
    }else {
        console.log("Error")
    }

}

function addStuff() {
    water = water + Number(input("Write how many ml of water you want to add:"))
    milk = milk + Number(input("Write how many ml of milk you want to add:"))
    coffee = coffee + Number(input("Write how many grams of coffee beans you want to add:"))
    cups = cups + Number(input("Write how many disposable cups you want to add:"))
}

function showAmount(){
    console.log(`The coffee machine has:\n` +
        `${water} ml of water\n` +
        `${milk} ml of milk\n` +
        `${coffee} g of coffee beans\n` +
        `${cups} disposable cups\n` +
        `$${money} of money`)
}

function takeMoney(){
    console.log(`I gave you ${money}`)
    money = 0
}


while (true){
    showAmount()
    console.log("Write action (buy, fill, take): ")
    let answer = input()
    if (answer == "buy"){
        buyCoffee()
    }else if (answer == "fill"){
        addStuff()
    }else if (answer == "take"){
        takeMoney()
    }
}