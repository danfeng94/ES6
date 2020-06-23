// WeakMap结构与Map结构类似，也是用于生成键值对的集合。

// WeakMap与Map的区别有两点。

// 首先，WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。

const map = new WeakMap();
map.set(1, 2)
// TypeError: 1 is not an object!
map.set(Symbol(), 2)
// TypeError: Invalid value used as weak map key
map.set(null, 2)
// TypeError: Invalid value used as weak map key


//WeakMap的设计目的在于，有时我们想在某个对象上面存放一些数据，但是这会形成对于这个对象的引用。

const e1 = document.getElementById('foo');
const e2 = document.getElementById('bar');
const arr = [
  [e1, 'foo 元素'],
  [e2, 'bar 元素'],
];

// 不需要 e1 和 e2 的时候
// 必须手动删除引用
arr [0] = null;
arr [1] = null;
//上面这样的写法显然很不方便。一旦忘了写，就会造成内存泄露。


const wm = new WeakMap();

const element = document.getElementById('example');

wm.set(element, 'some information');
wm.get(element) // "some information"
/**
 * 上面代码中，先新建一个 Weakmap 实例。然后，将一个 DOM 节点作为键名存入该实例，
 * 并将一些附加信息作为键值，一起存放在 WeakMap 里面。
 * 这时，WeakMap 里面对element的引用就是弱引用，不会被计入垃圾回收机制。
 */
//总之，WeakMap的专用场合就是，它的键所对应的对象，可能会在将来消失。WeakMap结构有助于防止内存泄漏。



const wm = new WeakMap();
let key = {};
let obj = {foo: 1};

wm.set(key, obj);
obj = null;
wm.get(key)
// Object {foo: 1}
//WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。
//上面代码中，键值obj是正常引用。所以，
//即使在 WeakMap 外部消除了obj的引用，WeakMap 内部的引用依然存在。