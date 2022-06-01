/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * contains(v)
 *
 * look up for value v in the linked list
 * @arg {type} v - value; may be of chars, numbers, u objects
 * @returns {bool} - true of false, if value v exist or not
 * may use traverse
 *
 * @example
 * contains(3)
 *
 * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array}
 * @see {@link https://jsdoc.app}
 */
function Node(data) {
    this.data = data
    this.next = null
}
const traverse=(d)=>{//es6
    let f=d//iterator
    while(f){//exists
        if(f.data)return d
        f=f.next
    }
    return null
}
const contains = (c) => {
    if(traverse(c)==c)return true
    return false
}
let a1 = new Node(3)
let a2 = new Node(-2)
let a3 = new Node(1)
a1.next=a2
a2.next=a3
let a=0
console.log(contains(a2))
console.log(a1)
