/**
 * JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），
 * 但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。
 */

const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
console.log(m.get(o)) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false
