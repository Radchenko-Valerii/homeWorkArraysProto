function MyArrayProto(){
  this.push = function(){
    for(let i=0; i<arguments.length; i++){
      this[this.length++] = arguments[i];
    }
    return this.length;
  }

  this.pop = function(){
    if(this.length > 0){
      i= this.length-1;
      j= this[i];
      delete this[i];
      this.length --;
      return j;
    } else {
      return undefined;
    }
  }

  this.shift = function(){
    if(this.length > 0){
      let j = this[0];
      for(let i=0; i<this.length; i++){
        this[i - 1] = this[i];
      }
      delete this[-1];
      this.length --;
      delete this[this.length];
      return j;
    } else {
      return undefined;
    }
  }

  this.unshift = function(...rest){
    for (let j=this.length+rest.length; j>0; j--){
      this[j] = this[j - rest.length]
    }
    for(let i= 0; i<rest.length; i++){
      this[i] = rest[i];
    }
    this.length += rest.length;
    delete this[this.length];
    return this.length;
  }

  this.concat = function(){
    let arrayResult = new MyArray();
    for(let i = 0; i < this.length; i++){
      arrayResult.push(this[i]);
    }
    for(let i = 0; i< arguments.length; i++){
      if(MyArray.isMyArray(arguments[i]) || Array.isArray(arguments[i])){
        for(let j=0; j<arguments[i].length; j++){
          arrayResult.push(arguments[i][j])
        }
      } else {arrayResult.push(arguments[i]);}
    }
    return arrayResult;
  }
}


function MyArray (){
  this.length = 0;
  for(let i=0; i<arguments.length; i++){
    this.push(arguments[i]);
  }
}

MyArray.isMyArray = function(value){
  return value instanceof MyArray;
}

const myArrProto = new MyArrayProto();
MyArray.prototype = myArrProto;

const myArr = new MyArray(5,8,14,27,0,'lol',6);

let arrr = [1, 2, 3];