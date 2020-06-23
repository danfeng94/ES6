// Array.from方法可以将 Set 结构转为数组。
const items = new Set([1,2,3,4,5]);

const array = Array.from(items);

console.log(Array.isArray(array));