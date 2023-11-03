class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // !: PRIVATE METHOD
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);

    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];

    if (!currentBucket) return undefined;

    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i][0] === key) return currentBucket[i][1];
    }
  }

  keys() {
    const keysArray = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) keysArray.push(this.data[i][0][0]);
    }

    return keysArray;
  }
}

const myHashTable = new HashTable(50);

myHashTable.set("name", "ismail");
myHashTable.set("email", "ismail@gmail.com");
myHashTable.set("age", 25);

console.log(myHashTable.get("name"));
console.log(myHashTable.get("email"));

console.log(myHashTable.keys());
