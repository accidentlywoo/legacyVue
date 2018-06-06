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

ㅡㅡㅡㅡㅡ

콜백
다음과 같이 동작하는 함수 만들기
CASE1 : 다른함수가 실행됨
함수(true, 다른함수)
CASE2 : 아무런 동작없음
함수(false, 다른함수)
CASE3 : 아무런 동작없음
함수(true)
CASE4 : 아무런 동작없음
함수(false)


ㅡㅡㅡㅡㅡ
프로미스
"POST", "https://m.apps.ssg.com/api/eventcoupon/main/datas.ssg"
const param = {
	"common"	: {
		"apl_ver"		: "2.4.5"
	,	"os_cd"			: "20"
	,	"ts"			: "20171121144621"
	,	"mobil_app_no"	: "12"
	}
,	"params"	: {
		"itemImgSize"	: "500"
	,	"siteNo"		: "6005"
	,	"type"			: "osmu"
	}
}
