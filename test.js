const HashMap = require("./hashmap.js");
const HashSet = require("./hashset.js");

function testHashMap() {
  const map = new HashMap();

  map.set("key1", "value1");
  map.set("key2", "value2");
  console.log("Get key1:", map.get("key1")); // Should log 'value1'
  console.log("Get key2:", map.get("key2")); // Should log 'value2'

  for (let i = 0; i < 20; i++) {
    map.set("key" + i, "value" + i);
  }
  console.log("Length after resizing:", map.length()); // Should log 22

  console.log("Has key1:", map.has("key1")); // Should log true
  console.log("Has key99:", map.has("key99")); // Should log false

  map.remove("key1");
  console.log("After removing key1:", map.has("key1")); // Should log false

  console.log("Current length:", map.length()); // Should log 21

  map.clear();
  console.log("After clearing:", map.length()); // Should log 0

  map.set("a", 1);
  map.set("b", 2);
  map.set("c", 3);
  console.log("Keys:", map.keys()); // Should log ['a', 'b', 'c']
  console.log("Values:", map.values()); // Should log [1, 2, 3]
  console.log("Entries:", map.entries()); // Should log [['a', 1], ['b', 2], ['c', 3]]
}

function testHashSet() {
  const set = new HashSet();

  set.set("value1");
  set.set("value2");
  console.log("Has value1:", set.has("value1")); // Should log true
  console.log("Has value3:", set.has("value3")); // Should log false

  for (let i = 0; i < 20; i++) {
    set.set("value" + i);
  }
  console.log("Length after resizing:", set.length()); // Should log 22

  set.remove("value1");
  console.log("After removing value1:", set.has("value1")); // Should log false

  console.log("Current length:", set.length()); // Should log 21

  set.clear();
  console.log("After clearing:", set.length()); // Should log 0

  set.set("a");
  set.set("b");
  set.set("c");
  console.log("Keys:", set.keys()); // Should log ['a', 'b', 'c']
}

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error("Usage: node test.js <module>");
  console.error("Available modules: HashMap, HashSet");
  process.exit(1);
}

const moduleToTest = args[0].toLowerCase();

if (moduleToTest === "hashmap") {
  testHashMap();
} else if (moduleToTest === "hashset") {
  testHashSet();
} else {
  console.error("Invalid module. Available modules: HashMap, HashSet");
  process.exit(1);
}
