function hello(num){
  this.num=num // function함수에서의 this 는 global 임으로 num은 전역변수
  console.log(num);
}

hello(100)
console.log(num); 

class Test{
  constructor(name){
    this.name = name
    console.log(this); // class 안에서의 this는 자기자신을 나타내는 객체
  }
}

const t = new Test('hong')

