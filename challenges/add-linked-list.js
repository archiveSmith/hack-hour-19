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

// ======= SOLUTIONS ==========================

// function addLinkedList(l1, l2, carryover) {
//   if (!l1 && !l2 && !carryover) {
//     return null;
//   }

//   var sum = carryover || 0;
//   if (l1) {
//     sum += l1.value;
//   }
//   if (l2) {
//     sum += l2.value;
//   }

//   var result = new Node(sum % 10);
//   if (l1 || l2) {
//     var rest = addLinkedList(
//       l1 ? l1.next : null,
//       l2 ? l2.next : null,
//       sum >= 10 ? 1 : 0
//     );
//     result.next = rest;
//   }
//   return result;
// }

//Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
// Output: 7 -> 0 -> 8
// let a = new Node(2)
// let b = new Node(1)
// let c = new Node(5)
// let x = new Node(5)
// let y = new Node(9)
// let z = new Node(2)
// a.next = b;
// b.next = c;
// x.next = y;
// y.next = z;

// -----------------------
// Two other solutions 
// -----------------------
/*
// iterative
function addLinkedList(num1, num2, carryover) {
  // make a loop of zeroes to handle numbers of un-equal length
  var zero = new Node(0);
  zero.next = zero;
  var node1 = num1, node2 = num2, ansNode;
  var ansList = ansNode = new Node(node1.value + node2.value);
  while (node1 || node2) {
    node1 = node1.next || zero;
    node2 = node2.next || zero;
    if (node1 === zero && node2 === zero) break;
    ansNode.next = new Node(node1.value + node2.value);
    ansNode = ansNode.next;
  }
  //handle the carry-overs. this loop handles all but the last digit
  for (ansNode = ansList; ansNode.next; ansNode = ansNode.next) {
    ansNode.next.value += Math.floor(ansNode.value / 10);
    ansNode.value %= 10;
  }
  //handle the last digit
  if (ansNode.value >= 10) {
    ansNode.next = new Node(1);
    ansNode.value %= 10;
  }
  return ansList;
}
*/

// parsing to integer
/*
function addLinkedList(l1, l2) {
  var node1 = l1, node2 = l2;
  var num1 = '', num2 = '';
  while(node1) {
    num1 = node1.value + num1;
    node1 = node1.next;
  }
  while(node2) {
    num2 = node2.value + num2;
    node2 = node2.next;
  }

  num1 = parseInt(num1, 10);
  num2 = parseInt(num2, 10);
  var sum = String(num1 + num2);
  var head = new Node(sum[sum.length - 1]);
  var tail = head;
  for (var i = sum.length - 2; i >= 0; i--) {
    tail.next = new Node(sum[i]);
    tail = tail.next;
  }
  return head;
}
*/
module.exports = {Node: Node, addLinkedList: addLinkedList};
