/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let x = l1;
  let y = l2;
  let zipped = null;
  let head = null;
  let lists = [x, y];
  //console.log(lists[0]);
  let index = 0;
  let first = true;
  let empty = false;
  let done = false;
  while (!done) {
    if (!lists[index]) {
      done = empty;
      empty = !empty;
      index = (index + 1) % 2;
    } else {
      if (first) {
        zipped = lists[index];
        head = lists[index];
        first = !first;
      } else {
        zipped.next = lists[index];
        zipped = zipped.next;
      }
      lists[index] = lists[index].next;
      if (!empty) {
        index = (index + 1) % 2;
      };
    }
  }
  return head;
};

function tests() {
  let a = new Node(1);
  let b = new Node(20);
  let a_curr = a;
  let b_curr = b;
  for (let i = 2; i < 11; i ++) {
    a_curr.next = new Node(i);
    a_curr = a_curr.next;
  }
  for (let i = 2; i < 9; i ++) {
    b_curr.next = new Node(21-i);
    b_curr = b_curr.next;
  }
  a_curr = a;
  b_curr = b;
  // while (a_curr) {
  //   console.log(a_curr.value);
  //   a_curr = a_curr.next;
  // }
  // while (b_curr) {
  //   console.log(b_curr.value);
  //   b_curr = b_curr.next;
  // }

  let x = zip(a, b);
  let x_curr = x;
  while (x_curr) {
    console.log(x_curr.value);
    x_curr = x_curr.next;
  }

}

//tests();

module.exports = {Node: Node, zip: zip};
