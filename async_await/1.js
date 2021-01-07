const fs = require('fs');

const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(err, data) {
      if(err) return reject(err);
      resolve(data);
    });
  });
};

const gen = async function(){
  const f1 = await readFile('/etc/fstab');
  const f2 = await readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
}

/**async函数相对于generator函数的改进 */

/**
 * 1.内置执行器
 * 2.更好的语义
 * 3.更广的适用性
 * 4.返回值是Promise
 * 、、、async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用then方法指定下一步的操作。
 */