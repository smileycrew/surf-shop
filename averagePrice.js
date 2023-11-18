const { inventory } = require("./data.js") 
const {
    isBargain, isClothing, isGear,
    isSurfboard, convertDataForAccounting,
    calculateAveragePrice
} = require("./functions.js")



console.log("\n-----------AVERAGE PRICE-------------\n")





const averagePrice = calculateAveragePrice(inventory)

console.log(averagePrice)

