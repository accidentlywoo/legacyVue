// 객체를 동적으로 생성하는 방법
function Health(name, lastTime){
    this.name = name;
    this.lastTime = lastTime;
    this.showHealth = function(){
        return this.name+"님, 오늘은"+this.lastTime+"에 운동을 하셨네요."
    }
    //return this;
}

const h = new Health("달리기","10:12");
const a = new Health("달리기","10:12");
// new -> return this;
// 아직 동일한 객체들이 생성되고 있다
h.showHealth === a.showHealth // false

function protoHealth(name, lastTime){
    this.name = name;
    thie.lastTime= lastTime;
}
protoHealth.prototype.showHealth = function(){
    return this.name+"님, 오늘은"+this.lastTime+"에 운동을 하셨네요."
}

const d = new protoHealth("달리기","9:2AM");
const b = new protoHealth("달리기","9:2AM");

b.showHealth() ===d.showHealth()//true
//메모리 효율에 좋다.