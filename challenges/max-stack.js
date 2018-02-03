/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  let output = {};
  output.lengths = 0;
  output.items = [];

  output.push = (x) => {
    output.items[output.items.length] = x;
    output.lengths++;
    return output.items.length;};

  output.pop = () => {
    let last = output.items[output.items.length-1];
    console.log('here is the last...',last)
    output.items = output.items.slice(0,output.items.length-1)
    // I need to figure out the eq
    output.lengths--;
    return last;
  };

  output.getMax = () => {return output.lengths};

  return output;
  /*
    I got this far and wanted to back up and check out a little light
    reading before I went too far down.
    https://initjs.org/data-structure-stack-in-javascript-714f45dbf889

    Ok i'm worried about the efficiency of this approach I've taken here.
    Is using slice in my pop function increasing my bigO?

    I'm also using output.lengths which I increment/decrement in my functions
    Is this better than just checking output.items since it already has a .length
    attached by being an array?
    Should I not be using an array internally.. I guess that does feel silly.
    aahhh..
    It's better to do key/value pairs when you can .
    I should probably be making an object... every new item will have a key that
    is the string of an incrementing number..... "1", "2"... and the last item
    can have a special key of "last"... that way I can get to it quickly..


  */
}

// let a = new Stack();
//
// console.log('should return 1..',a.push(44));
// console.log('should return 2..',a.push(22));
// console.log('should return 3..',a.push(46));
//
// console.log('should return 46',a.pop());
// console.log('should return 22',a.pop());
// console.log('should return 44',a.pop());
//
// console.log('should return 3..',a.push(46));
// console.log('should return 2..',a.push(22));
// console.log('should return 2..',a.push(22));
// console.log('should return 2..',a.push(22));
//
// console.log('should return 4',a.getMax())
// console.log(a);



//
// function Stack2() {
//   let output = {};
//   let totalCounter = 0;
//   //this time I want to use an object only under the hood instead of an array
//   //for the items.
//   output.push = function(x) {
//   totalCounter++;
//   output[String(totalCounter)] = x;
//   return totalCounter;
//   }
//
//   output.pop = function(x) {
//     let removedElement = output[String(totalCounter)];
//     delete output[String(totalCounter)];
//     return removedElement;
//   }
// return output;
// }
//
// let a = new Stack();
//
//
//
//
//
// console.log('should return 1..',a.push(44));
// console.log('should return 2..',a.push(22));
// console.log('should return 3..',a.push(46));
//
// console.log('should return 46',a.pop());
// console.log('should return 22',a.pop());
// console.log('should return 44',a.pop());
// console.log('should return our beautiful stack',a);
// // console.log('should return 3..',a.push(46));
// // console.log('should return 2..',a.push(22));
// // console.log('should return 2..',a.push(22));
// // console.log('should return 2..',a.push(22));
//
// // console.log('should return 4',a.getMax())
// // console.log(a);
