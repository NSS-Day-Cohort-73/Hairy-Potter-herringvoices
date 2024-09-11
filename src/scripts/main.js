// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"
import { potteryList } from "./PotteryList.js"

//Capture the potteryList element
let potteryHTML = document.querySelector(".potteryList")

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 3, 5, 1)
let plate = makePottery("plate", 4, 1, 2)
let bowl = makePottery("bowl", 5, 4.5, 3)
let vase = makePottery("vase", 10, 18, 4)
let dogBowl = makePottery("dog bowl", 7, 1.8, 5)


// Fire each piece of pottery in the kiln

firePottery(mug, 2600)
firePottery(plate, 2000)
firePottery(bowl, 2000)
firePottery(vase, 2000)
firePottery(dogBowl, 2000)

// Determine which ones should be sold, and their price
toSellOrNotToSell(mug)
toSellOrNotToSell(plate)
toSellOrNotToSell(bowl)
toSellOrNotToSell(vase)
toSellOrNotToSell(dogBowl)

// Invoke the component function that renders the HTML list

potteryHTML.innerHTML = potteryList()