class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // !: Get an item whit the index from the data object (array)
  get(index) {
    return this.data[index];
  }

  // !: Add item to the beginning of that data object (array)
  push(item) {
    this.data[this.length] = item;
    this.length++;

    return this.length;
  }

  // !: Delete the lastItem in data object (array) and return it
  pop() {
    const lastItem = this.data[this.length - 1];

    delete this.data[this.length - 1];
    this.length--;

    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);

    return item;
  }

  // !: Shift the items from the index until the lastIndex in the array
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    // !: delete the last element in the array
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();

newArray.push("hello");
newArray.push("world");
newArray.push("!");

newArray.delete(1);

console.log(newArray);
