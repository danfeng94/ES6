/**
 *Set.prototype.keys()：返回键名的遍历器
  Set.prototype.values()：返回键值的遍历器
  Set.prototype.entries()：返回键值对的遍历器
  Set.prototype.forEach()：使用回调函数遍历每个成员
 */

 // 由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致。
let set = new Set(['red', 'green', 'blue']);

for(let item of set.keys()){
  console.log(item);
}

for (let item of set.values()) {
  console.log(item);
}

for (let item of set.entries()) {
  console.log(item);
}

//Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的values方法。
for (let item of set) {
  console.log(item);
}
