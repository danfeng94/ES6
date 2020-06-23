//此外，Map 还有一个forEach方法，与数组的forEach方法类似，也可以实现遍历。

map.forEach(function(value, key, map) {
  console.log("Key: %s, Value: %s", key, value);
});

//forEach方法还可以接受第二个参数，用来绑定this。

const reporter = {
  report: function(key, value) {
    console.log("Key: %s, Value: %s", key, value);
  }
};

map.forEach(function(value, key, map) {
  this.report(key, value);
}, reporter);