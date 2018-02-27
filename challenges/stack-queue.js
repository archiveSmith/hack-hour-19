/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {

    this.storage = {};
    this.index = 0;



}


/**
* Queue Class
*/


function Queue() {

    let firstBox = new Stack();
    let lastBox = new Stack();

    this.enqueue = function () {
        firstBox.push(lastBox);
    }
}

module.exports = { Stack: Stack, Queue: Queue };



