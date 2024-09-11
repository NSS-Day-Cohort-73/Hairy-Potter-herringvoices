// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 1, 5, 1)
let plate = makePottery("plate", 1.5, 1, 2)
let bowl = makePottery("bowl", 1.75, 4.5, 3)
let vase = makePottery("vase", 6, 18, 4)
let dogBowl = makePottery("dog bowl", 2.5, 1.8, 5)


// Fire each piece of pottery in the kiln

firePottery(mug, 2600)
firePottery(plate, 2000)
firePottery(bowl, 2000)
firePottery(vase, 2000)
firePottery(dogBowl, 2000)

toSellOrNotToSell(mug)
toSellOrNotToSell(plate)
toSellOrNotToSell(bowl)
toSellOrNotToSell(vase)
toSellOrNotToSell(dogBowl)

console.log(mug)
console.log(plate)
console.log(bowl)
console.log(vase)
console.log(dogBowl)
console.log(usePottery())

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

