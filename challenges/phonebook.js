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
  // sort it first by name? how long does this take? oh well.
  jazbook.sort((a,b) => {
    if (a[0] < b[0]) return -1;
    else return 1;
  });

  // then do a binary search.
  function search(jazbook, name){
    if (jazbook.length === 0) return 'not found'
    let mid = Math.floor(jazbook.length/2);
    console.log('jazbookmid', jazbook[mid][1]);
    
    if (name === jazbook[mid]){
      return jazbook[mid][1];
    }
    else if (name > jazbook[mid]) {
      jazbook = jazbook.slice(mid+1);
    } else {
      jazbook = jazbook.slice(0, mid);
    }
    return search(jazbook, name);
  }

  return search(jazbook, name);
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){

}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
