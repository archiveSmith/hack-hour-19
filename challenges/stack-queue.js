/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
this.stack = [];
this.size = 0;

}


/**
* Queue Class
*/


function Queue() {

this.pushS = new Stack();
this.popS = new Stack ();

}


Queue.prototype.dequeue = function () {
    if(this.pushS.length === 0) {
        if(this.popS.length === 0) { return 'cannot dequeue because line is empty';}
        while(this.popS.length > 0 ) {
            var p = this.popS.pop();
            this.pushS.push(p);
        }
    }
    return this.popS.pop();
}

module.exports = {Stack: Stack, Queue: Queue};
