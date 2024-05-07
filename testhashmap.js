const HashMap = require("./hashmap.js");

const testHashMap = new HashMap();

for (let i = 1; i <= 16; i++) {
  testHashMap.set(`key${i}`, `value${i}`);
}

console.log(testHashMap.entries());
