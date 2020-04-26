function Node(data){
    this.data= data;
    this.next= Node;
}

let node1 = new Node(4);
let node2 = new Node(5);

console.log(node1.next);
console.log(node2.next);