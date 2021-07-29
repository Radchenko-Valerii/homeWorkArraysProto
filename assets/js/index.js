function MyArrayProto(){
  this.push = function(){
    for(let i=0; i<arguments.length; i++){
      this[this.length++] = arguments[i];
    }
    return this.length;
  }

  this.pop = function(){
    i= this.length -1;
    j= this[i];
    delete this[i];
    this.length --;
    return j;
  }

  this.shift

  this.unshift

  this.concat


}


function MyArray (){
  this.length = 0;
  for(let i=0; i<arguments.length; i++){
    this.push(arguments[i]);
  }
}

const myArrProto = new MyArrayProto();
MyArray.prototype = myArrProto;

const myArr = new MyArray(1,2,3,4,5,'lol',6)