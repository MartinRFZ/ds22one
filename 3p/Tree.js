//
// ES5 tree
// imports
// preorder
//

function Node(o){
    this.d=o//bject<->data
    this.l=null//eft
    this.r=null//ight
}

let p = new Node('+')
let o1 = new Node(3)
let o2 = new Node(-1)

p.l = o1
p.r = o2

preorder(p)

function preorder(p){
  if(n!==null){
    console.log(n.d)
    preorder(n.l)
    preorder(n.r)
  }
}

function inorder(p){
  if(n!==null){
    inorder(n.l)
    console.log(n.d)
    inorder(n.r)
  }
}

function posorder(p){
  if(n!==null){
    posorder(n.l)
    posorder(n.r)
    console.log(n.d)
  }
}
