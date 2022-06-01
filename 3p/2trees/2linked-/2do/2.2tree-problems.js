/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * 
 * PROBLEM 1
 * inorder(n)
 *
 * traverses a tree in INORDER
 * @arg {tree} n - tree
 *
 * @example
 * inorder(root)
 * 
 * PROBLEM 2
 * posorder(n)
 *
 * traverses a tree in POSORDER
 * @arg {tree} n - tree
 *
 * @example
 * posorder(root)
 * 
 */
function inorder(a){
    if (a!==null){
        inorder(a.l)
        console.log(a.d)
        inorder(a.r)
    }
}
function postorder(a){
    if (a!==null){
        postorder(a.l)
        postorder(a.r)
        console.log(a.d)
    }
}
function preorder(a){
    if (a!==null){
        console.log(a.d)
        preorder(a.l)
        preorder(a.r)
    }
}
function Node(o){
    this.d=o//bject<->data
    this.l=null//eft
    this.r=null//ight
}
let ob = new Node('+')
let b1 = new Node('-')
let b2 = new Node(3)
let b3 = new Node(8)
let b4 = new Node(3)
ob.l = b1
b1.l = b3
b1.r = b4
ob.r = b2
console.log('Preorder:')
console.log(preorder(ob))
console.log('Inorder')
console.log(inorder(ob))
console.log('Postorder')
console.log(postorder(ob))
