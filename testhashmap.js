const HashMap = require("./hashmap.js");

const testHashMap = new HashMap();

testHashMap.set("hello", "world");
testHashMap.set("foo", "bar");
testHashMap.set("baz", "qux");

// console.log(testHashMap.remove("hello"));
console.log(testHashMap.get("hello"));
console.log("Has Check, should be true", testHashMap.has("hello"));
testHashMap.clear();
console.log(testHashMap.length());
