/**
 * canIOrderItem - A function that checks if a specified dish is available in stock.
 *
 * @param {string} dishName - The name of the dish to be checked
 * @param {Array<{[dish: string]: number}>} stockArray - An array of objects, each object having a dish name as the key and the stock as the value
 * @returns {boolean} - True if there is stock available for the specified dish, false otherwise
 *
 * Usage:
 * const stockArray = [{ "Pizza": 5 }, { "Burger": 3 }];
 * const result = canIOrderItem("Pizza", stockArray);
 * Output: true
 */
function canIOrderItem(dishName, stockArray) {
}

module.exports = canIOrderItem;
