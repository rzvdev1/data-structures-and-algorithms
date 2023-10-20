function leftJoin(hash1, hash2) {
  let result = [];
  for (let key in hash1) {
    let arr = [];
    arr.push(key);
    arr.push(hash1[key]);
    if (hash2[key]) {
      arr.push(hash2[key]);
    } else {
      arr.push(null);
    }
    result.push(arr);
  }
  return result;
}

module.exports = leftJoin;
