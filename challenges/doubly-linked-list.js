/*
Create a doubly linked list with an add and remove method
 */
 function LinkedList() {
   this.head = null;
   this.tail = null;
   this._length = 0;
 }

 function Node(val) {
   this.val = val;
   this.next = null;
   this.prev = null;
 }

 /*
 Adds a node to the end of the list
  */
 LinkedList.prototype.add = function(val) {
   let node = new Node(val);
   if (this.head === null) {
     this.head = node;
   }
   else {

   }
 }

 /*
 Removes the first node with the inputted value
  */
 LinkedList.prototype.remove = function(val) {

 };

 let myLL = new LinkedList();
 myLL.add(42)
 myLL.add(44);
 console.log(myLL);

module.exports = LinkedList;
