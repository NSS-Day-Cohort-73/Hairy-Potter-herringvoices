import { usePottery } from "./PotteryCatalog.js";


export const potteryList = () => {
    let potHTML = ""
    for (const item of usePottery()) {
        potHTML += `<section class="pottery" id="pottery--1">
  <h2 class="pottery__shape">${item.shape}</h2>
  <div class="pottery__properties">
    Item weighs ${item.weight} hectograms and is ${item.height} cm in height
  </div>
  <div class="pottery__price">Price is \$${item.price}</div>
</section>`
    }
    return potHTML
}