const HashMap = require("./hashmap.js");
const HashSet = require("./hashset.js");

function testHashMap() {
  const map = new HashMap();

  map.set("keyA", "valueA");
  map.set("keyB", "valueB");
  console.log("Get keyA:", map.get("keyA")); // Should log 'value1'
  console.log("Get keyB:", map.get("keyB")); // Should log 'value2'

  map.remove("keyA");
  console.log("After removing keyA:", map.has("keyA")); // Should log false
  console.log("Current length:", map.length()); // Should log 1

  for (let i = 0; i < 20; i++) {
    map.set("key" + i, "value" + i);
  }
  console.log("Length after resizing:", map.length()); // Should ideally log 22 but will arround log 15-20

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

  set.set("valueA");
  set.set("valueB");
  console.log("Has valueA:", set.has("valueA")); // Should log true
  console.log("Has valueB:", set.has("valueB")); // Should log false

  console.log("Current length:", set.length()); // Should log 2
  set.remove("valueA");
  console.log("After removing valueA:", set.has("valueA")); // Should log false

  for (let i = 0; i < 20; i++) {
    set.set("value" + i);
  }
  console.log("Length after resizing:", set.length()); // Should ideally log 21 but will arround log 15-20

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
