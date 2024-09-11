
export const firePottery = (pot, temp) => {
    pot.fired = true
    pot.cracked = false
    if (temp > 2200) {
        pot.cracked = true
    }
    return pot
}