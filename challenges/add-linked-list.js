/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {

// initial attempt
//   let p1 = l1,
//       p2 = l2;
//       sum = 0,
//       numArr,
//       linkedList;

//   const a1 = [],
//         a2 = [];


//   while (p1.value || p2.value) {
//     if (p1.value) {
//       a1.push(p1.value);
//       p1 = p1.next;
//     }
//     if (p2.value) {
//       a2.push(p2.value);
//       p2 = p2.next;
//     }
//   }

//   sum = parseInt(a1.reverse().join()) + parseInt(a2.reverse().join());
//   numArr = sum.toString().split("");

//   for (let i = numArr.length; i > 0; i--) {
//     const newNode = new Node(numArr.pop());

//     if (!linkedList) {
//       linkedList = newNode;
//     } else {
//       linkedList.next = newNode;
//       linkedList = newNode;
//     }
    
//   }
//    return linkedList;

    let p1 = l1;
    let p2 = l2;
    let linkedList;
    let carry = 0;

    while (p1.value || p2.value) {
      let v1 = 0;
      let v2 = 0;
      let num = 0;
      if (p1.value) {
        v1 = p1.value;
        p1 = p1.next;
      }
      if (p2.value) {
        v2 = p2.value;
        p2 = p2.next;
      }

      sum = v1 + v2 + carry;

      if (sum.toString().length === 2) {
        carry = +sum.toString()[0];
        num = +sum.toString()[1];
      } else {
        carry = 0;
        num = sum;
      }

      const newNode = new Node(num);

      if (!linkedList) {
        linkedList = newNode;
      } else {
        linkedList.next = newNode;
        linkedList = newNode;
      }
    }

    return linkedList;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
