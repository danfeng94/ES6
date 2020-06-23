/**
 * Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
   Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
   Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
   Set.prototype.clear()：清除所有成员，没有返回值。
 */

const set = new Set();

set.add(1).add(2).add(2);
console.log(set.size);
console.log(set.has(1));
console.log(set.has(2));
console.log(set.has(3));

console.log(set.delete(2));
set.has(2);

set.add(4);
console.log(set);

set.clear();
console.log(set);

