var healthObj = {
    name : "달리기",
    lastTime : "PM 10:12",
    showHealth : function(){
        setTimeout(function(){
            console.log("what the this(Timeout)", this);
            console.log(this.name + "님, 오늘은" + this.lastTime + "에 운동을 하셨네요");
        },1000)
        console.log("what the this", this);
    }
}
healthObj.showHealth();

//bind Method
//bind 동작은 새로운 함수를 반환한다.

var healthObj = {
    name : "달리기",
    lastTime : "PM10:12",
    showHealth : function() {
      setTimeout(function() {
          console.log("what the this(Timeout)", this);
          console.log(this.name + "님, 오늘은 " + this.lastTime + "에 운동을 하셨네요");      
      }.bind(this), 1000)
    }
  }
  healthObj.showHealth();