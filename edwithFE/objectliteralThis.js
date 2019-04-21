var healthObj ={
    name : "달리기",
    lastTime : "PM10:12",
    showHealth : function() {
      console.log(this.name + "님, 오늘은 " + this.lastTime + "에 운동을 하셨네요");
    }
}

healthObj.showHealth();
//  비슷한 기능을 묶어서 객체 리터럴로 코드를 만들고, 각 메서드를 실행해보자.

//this 객체 안에서의 this는 그 객체 자신을 가리킨다.
const obj = {
    getName(){
        return this.name;
    },
    setName(name){
        this.name = name;
    }
}
obj.setName("Woo");
const result = obj.getName();
console.log(result);
//this+ JavaScript에는 전역스크립트나 함수가 실헹될 때 실행문맥(Execution context)이 생성
//실제 실행은 브라우저내에 stack이라는 메모리 공간에 올라가서 실행
//모든 context에 참조하고 있는 객체(thisBinding)가 존재하는데, 현재 context가 참조하고 있는 객체를 알기 위해서는 this를 사용할 수 있다.
//다시 말해, 함수가 실행될때 함수에서 가리키는 this 키워드를 출력하보면 
//context가 참조하고 있는 객체를 알 수 있다.
function get(){
    return this;
}
console.log("1",get()); //window. 함수가 실행될떄의 컨텍스트는 window를 참조한다.
console.log("2",new get());