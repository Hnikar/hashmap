const HashMap = require("./hashmap.js");

const testHashMap = new HashMap();

testHashMap.set("hello", "world");
testHashMap.set("foo", "bar");
testHashMap.set("baz", "qux");

console.log(testHashMap.get("hello"));
