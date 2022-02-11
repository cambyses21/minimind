/* Maximize Stock Trading Profit
Given the daily values of a stock, create a function called maxProfitDays() that, given a list of integers, will return the index value of the two elements that represent the day on which one should have bought a share and the day on which one should have sold a share based on the max profit.

A list of integers will represent the stock price at the beginning or “opening bell” of each day for a week. You are required to buy and sell only once. You also must buy a stock before selling it.

For example, given the list [17, 11, 60, 25, 150, 75, 31, 120], you can assume that index 0 represents day 0 and index 7 represents day 7. In this case, purchasing on day 1 and selling on day 4 would yield the most profit. If we were to call maxProfitDays([17, 11, 60, 25, 150, 75, 31, 120]), the function would return [1, 4].
*/

const test1 = [17, 11, 60, 25, 150, 75, 31, 120];
const test2 = [5, 4, 1, 3, 5, 3, 1];
const test3 = [10,10,10,10];

function maxProfitDays(arr) {
    let objArr = [];
    for (let i = 0; i < arr.length; i++) {
        objArr.push({value: arr[i], index: i});
    }
    return [objArr.sort((a,b) => a.value - b.value)[0].index, objArr.sort((a,b) => a.value - b.value)[objArr.length - 1].index];
}

console.log(maxProfitDays(test1));
console.log(maxProfitDays(test2));
console.log(maxProfitDays(test3));

// =================================