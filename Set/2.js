const set = new Set([1,4,5,3,5,3,2]);
console.log([...set]);

const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(items.size);


// 去除数组的重复成员
[...new Set(array)]

console.log([...new Set('ababbc')].join(''));

  /*
   向 Set 加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。
   Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，
   它类似于精确相等运算符（===），主要的区别是向 Set 加入值时认为NaN等于自身，
   而精确相等运算符认为NaN不等于自身。
  */