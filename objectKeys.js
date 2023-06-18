function grabKeys(obj) {
    let keys = [];
    for (let x in obj) {
        keys += x + ' ';
    }
    return keys;
}

const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
    d: true,
    e: 'end'
  };

  console.log(grabKeys(object1));