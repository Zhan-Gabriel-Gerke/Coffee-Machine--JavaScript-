// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

// console.log("Starting to make a coffee\n" +
//     "Grinding coffee beans\n" +
//     "Boiling water\n" +
//     "Mixing boiled water with crushed coffee beans\n" +
//     "Pouring coffee into the cup\n" +
//     "Pouring some milk into the cup\n" +
//     "Coffee is ready!")

// console.log("Write how many cups of coffee you will need:")
//
// cupsOfCoffee = input()
//
// console.log(`For ${cupsOfCoffee} cups of coffee you will need:
// ${200 * cupsOfCoffee} ml of water
// ${50 * cupsOfCoffee} ml of milk
// ${15 * cupsOfCoffee} g of coffee beans`)

function cupsOfCoffee (milk, water, coffee){
    let waterRequiredForOneCoffee = 200
    let milkRequiredForOneCoffee = 50
    let coffeeRequiredForOneCoffee = 15

    let arrayOfCoffee = new Array(3);

    arrayOfCoffee[0] = milk / milkRequiredForOneCoffee
    arrayOfCoffee[1] = water / waterRequiredForOneCoffee
    arrayOfCoffee[2] = coffee / coffeeRequiredForOneCoffee


    return Math.floor(Math.min(arrayOfCoffee[0], arrayOfCoffee[1], arrayOfCoffee[2]))

}

let amountOfTheWater = Number(input("Write how many ml of water the coffee machine has:"))
let amountOfTheMilk = Number(input("Write how many ml of milk the coffee machine has:"))
let amountOfTheCoffee = Number(input("Write how many grams of coffee beans the coffee machine has:"))
let cupsOfCoffeeNeedToDo = Number(input("Write how many cups of coffee you will need:"))


let canMakeCups = cupsOfCoffee(amountOfTheMilk, amountOfTheWater, amountOfTheCoffee)

if (cupsOfCoffeeNeedToDo < canMakeCups) {
    console.log(`Yes, I can make that amount of coffee (and even ${canMakeCups - cupsOfCoffeeNeedToDo} more than that)`)
} else if (canMakeCups < cupsOfCoffeeNeedToDo){
    console.log(`No, I can make only ${canMakeCups} cups of coffee`)
} else {
    console.log("Yes, I can make that amount of coffee")
}