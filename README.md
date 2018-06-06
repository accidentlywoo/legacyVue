클로져
 - 객체 만들기 : private 속성 + getter/setter
리턴체인
 - 원시타입 리턴받기
function a(test) {
return test;
}
 - 참조타입 리턴받기
function b(test) {
var obj = {test: test};
return obj;
}
 - a('테스트'), b('테스트')
각각 함수 호출해서 변수에 담고,
원시타입은 값 자체,
참조타입은 값.test
수정해서 읽어보기