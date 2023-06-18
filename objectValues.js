function grabValues(obj) {
    let values = [];
    for (let x in obj) {
        values += obj[x] + ' ';
    }
    return values;
}

const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
    d: true,
    e: 'end'
  };

  console.log(grabValues(object1));