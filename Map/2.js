const map = new Map([
  ["name", "佐佐木希"],
  ["love", "石原里美"]
]);

console.log(map.size);
console.log(map.has('name'));
console.log(map.get('name'));
console.log(map.get('love'));

// 上面的代码等同于下面的代码

const items = [
  ['name', '佐佐木希'],
  ['lvoe', '石原里美']
];

const map = new Map();

items.forEach(
  ([key, value]) => map.set(key, value)
);