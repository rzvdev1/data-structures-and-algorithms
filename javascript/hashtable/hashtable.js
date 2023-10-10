const hash = (key, size) => {
  let hashedKey = 0;
  for (let i = 0; i < key.length; i++) {
    hashedKey += key.charCodeAt(i);
  }
  return hashedKey % size;
};

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = Array(this.size);

    for (let i = 0; this.buckets.length; i++) {
      this.buckets[i] = new Map();
    }
  }
  insert(key, value) {
    let idx = hash(key, this.size);
    this.buckets[idx].set(key, value);
  }

  remove(key) {
    let idx = hash(key, this.size);
    let deleted = this.buckets[idx].get(key);
    this.buckets[idx].delete(key);
    return deleted;
  }

  search(key) {
    let idx = hash(key, this.size);
    return this.buckets[idx].get(key);
  }
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        for (let j of this.buckets[i]) {
          keysArr.push(j[0]);
        }
      }
    }
  }
}

module.exports = { hash, HashTable };

// resource that helped me understand https://www.youtube.com/watch?v=QuFPIZj55hU
