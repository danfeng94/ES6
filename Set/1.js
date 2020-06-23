const s = new Set();

[2,3,4,5,6,7].forEach(x => s.add(x))

for(let i of s){
  console.log(i);
}

// Set 结构不会添加重复的值。