// async function getStockPriceByName(name){
//   const symbol = await getStockSymbol(name);
//   const stockPrice = await getStockPrice(symbol);
//   return stockPrice;
// }

// getStockPriceByName('goog').then(function(result){
//   console.log(result);
// })

/**
 * 上面代码是一个获取股票报价的函数，函数前面的async关键字，表明该函数内部有异步操作。调用该函数时，会立即返回一个Promise对象。
 */

class Sleep {
  constructor(timeout) {
    this.timeout = timeout;
  }
  then(resolve, reject){
    const startTime = Date.now();
    setTimeout(() => {
       resolve(Date.now(0 - startTime));
    }, this.timeout);
  }
}

// (async() => {
//   const sleepTime = await new Sleep(1000);
//   console.log(sleepTime);
// })();
/**
 * 等同于下面的代码
 */

async function getTime() {
  const sleepTime = await new Sleep(1000);
  console.log(sleepTime);
}

getTime();