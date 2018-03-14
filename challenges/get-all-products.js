/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
    const products = [];
    const first = array.slice(1);
    products.push(first.reduce((acc, el) => acc * el));

    for (let i = 1; i < array.length - 1; i++) {
        const front = array.slice(0, i).reduce((acc, el) => acc * el);
        const back = array.slice(i+1).reduce((acc, el) => acc * el);
        products.push(front * back);
    }

    const last = array.slice(0, array.length - 1);
    products.push(last.reduce((acc, el) => acc * el));

    return products;
}

getAllProducts([1, 7, 3, 4]);

module.exports = getAllProducts;
