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

  this.shift = function(){
    let j = this[0];
    for(let i=0; i<this.length; i++){
      this[i - 1] = this[i];
    }
    delete this[-1];
    this.length --;
    delete this[this.length];
    return j;
  }

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