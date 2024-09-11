
let forSale = []

export const toSellOrNotToSell = (pot) => {
    if (!pot.cracked) {
        if (pot.weight >= 6) {
            pot.price = 40
            forSale.push(pot)
            return pot
        }else {
            pot.price = 20
            forSale.push(pot)
            return pot
        }
    }
}

export const usePottery = () => {
    const copyArray = [...forSale]
    return  copyArray
}