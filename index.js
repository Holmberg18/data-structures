//Single linked linkedlist

function LinkedList(){
  this.head = null;
}


LinkedList.prototype.push = function(val){

  var node = {
    value: val,
    next:null
  }

  if(!this.head){
    this.head = node;
  } else{
    var current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }


}

var sll = new LinkedList();

sll.push(2);
sll.push(3);
sll.push(4);

var currNode = sll.head;

while(currNode){
  console.log(currNode.value)
  currNode = currNode.next;
}
