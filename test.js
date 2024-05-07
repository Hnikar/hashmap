const HashMap = require("./hashmap.js");
const HashSet = require("./hashset.js");

const testHashMap = new HashMap();
const testHashSet = new HashSet();

for (let i = 1; i <= 16; i++) {
  testHashMap.set(`key${i}`, `value${i}`);
}
for (let i = 1; i <= 16; i++) {
  testHashSet.set(`key${i}`);
}

// Test has method
console.log("Testing has:");
console.log(testHashSet.has("key1"));

// Test remove method
console.log("Testing remove:");
console.log(testHashSet.remove("key1"));

// Test length method
console.log("Testing length:");
console.log(testHashSet.length());

// Test keys method
console.log("Testing keys:");
console.log(testHashSet.keys());

// Test clear method
console.log("Testing clear:");
testHashSet.clear();
console.log(testHashSet.length());
