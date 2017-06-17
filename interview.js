//verify a prime Number

var verPrime = (num) => {

for(var i = 2; i < num; i++){
  if(num % i == 0){
    return false;
  }
}

return true;


}



console.log(verPrime(237));

console.log(verPrime(31));




//Find all prime factors of a number?
var primeFactors = [];

var checkPrime = (num) => {

  for(var i = 2; i < num; i++){
    if(num % i == 0){
      return false;
    }
  }

  return true;
}


var primeFact = (num) => {

  for(var i=2; i <= num; i++){

    if(num % i == 0){
      if(checkPrime(i) == true){
        primeFactors.push(i);
      }
    }

  }


}


primeFact(21);

console.log(primeFactors);



//How to get the nth fibonacci


var fibo = (n) => {

  let counter = 1;
  let fiboArr = [0,1];

  if (n == 0) return 0;

  if (n <= 2){
    return fiboArr[n - 1];
  }

  while(counter < (n - 1)){
      fiboArr.push(fiboArr[counter - 1] + fiboArr[counter]);
      counter++;
  }

  return fiboArr[fiboArr.length - 1];

}


console.log(fibo(14));



// Greatest common divisor, how would you get the greatest common divisor of two numbers.

var comDiv = (n,t) => {

  let divisors = [];
  let max;

  if(n >= t){
    max = t;
  } else {
    max = n;
  }

  for(var i = 0; i <= max; i++){
    if (n % i == 0 && t % i == 0){
      divisors.push(i);
    }
  }


  return Math.max.apply(null,divisors);

}


console.log(comDiv(14,28));


//singly linked list


function LinkedList(){
  this.head = null;
}


LinkedList.prototype.push = function(val){

  var node = {
    value: val,
    next: null
  }

  if(!this.head){
    this.head = node;
  } else {
    var current = this.head;
    while(current.next){
      current = current.next;
    }

    current.next = node;

  }

}

var sll = new LinkedList();

sll.push(4);
sll.push(5);
sll.push(6);

var currentNode = sll.head;

while(currentNode){
  console.log(currentNode.value);
  currentNode = currentNode.next;
}


//measure linkedlist length


function LinkedList(){
  this.head = null;
}


LinkedList.prototype.push = function(val){

  var node = {
    value: val,
    next: null
  }

  if(!this.head){
    this.head = node;
  } else {
    var current = this.head;
    while(current.next){
      current = current.next;
    }

    current.next = node;

  }

}

var sll = new LinkedList();

sll.push(4);
sll.push(5);
sll.push(6);

var currentNode = sll.head;

var count= 0;
while(currentNode){
  count++;
  currentNode = currentNode.next;
}

console.log(count);



//find middle node of linkedlist;


function LinkedList(){
  this.head = null;
}


LinkedList.prototype.push = function(val){

  var node = {
    value: val,
    next: null
  }

  if(!this.head){
    this.head = node;
  } else {
    var current = this.head;
    while(current.next){
      current = current.next;
    }

    current.next = node;

  }

}

var sll = new LinkedList();

sll.push(4);
sll.push(5);
sll.push(6);
sll.push(7);
sll.push(8);

var slowNode = sll.head;
var fastNode = sll.head;

while(fastNode.next){
  fastNode = fastNode.next.next;
  slowNode = slowNode.next;
}

console.log(slowNode.value);



//How would you remove duplicate members from an array?

var removeDup = (arr) => {

  var newArr = [],
      exists = {},
      element;

  for(var i = 0; i < arr.length; i++){
      element = arr[i];

      if(!exists[element]){
        newArr.push(element);
        exists[element] = true;
      }

  }

  return newArr;

}

console.log(removeDup([1,3,3,3,1,5,6,7,8,1]));
