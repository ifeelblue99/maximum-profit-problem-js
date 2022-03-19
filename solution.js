/*
Problem: Given an array of stock prices over time, 
need to figure out the best buy and sell price so that we get the maximum profit. 
The selling should occur after buying of the stock
*/
const prices = [15, 5, 3, 5, 7, 8, 17]

function maxProfit(arr){
  
  let cursorBack = arr.length%2===0 ? Math.floor(arr.length/2)-1 : Math.floor(arr.length/2)
  let cursorFront = cursorBack+1
  
  let max = arr[cursorBack]
  let min = arr[cursorFront]
  
  while(cursorBack>0){
    max = Math.max(arr[cursorFront], max)
    min = Math.min(arr[cursorBack], min)
    
    cursorFront++
    cursorBack--
  }
  // return max profit
  return  max-min
}

// driver code
console.log(maxProfit(prices));
