/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?

* Part 2: 
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook 
* complete with methods to add new names and look up and remove existing entries
*/

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  return jazbook.reduce((acc, record) => {
    console.log(record)
    if (record[0] === name) acc = record[1];
    return acc;
  }, false);
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  this.directory = {};
  jazbook.forEach(record => {
    this.directory[record[0]] = record[1];
  });
}

makePhoneBookObject.prototype.add = function(name, number) {
  this.directory[name] = number;
}

makePhoneBookObject.prototype.lookup = function(name) {
  return this.directory[name] ? this.directory[name] : false;
}

makePhoneBookObject.prototype.remove = function(name) {
  let removed;
  if (this.directory[name]) {
    removed = this.directory[name];
    delete this.directory[name];
  }
  return removed;
}


const jazbook = [
  ['jae','301-844-1211'],
  ['alex','301-844-3421'],
  ['david','301-844-0978'],
  ['travis','301-844-8505'],
  ['jasmine','1800-974-4539'],
];

const jazObj = new makePhoneBookObject(jazbook);

console.log(findName(jazbook, 'helo'));
console.log('jazbook object', jazObj);
console.log(jazObj.lookup('david'));
console.log(jazObj.lookup('help'));
console.log(jazObj.add('henry', '301-703-415'));
console.log(jazObj.lookup('henry'));
console.log(jazObj.remove('henry'));
console.log('jazbook object', jazObj);


const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
