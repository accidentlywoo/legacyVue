언어 : 클로져, 리턴체인, 콜백체인, 프로미스, 프로토타입
데이터 : AJAX, JSON, OLTP(실시간처리+데이터정합성보장) / BATCH(스케줄링+일괄처리)
물류
 - 입고 : 입하(=하차)=입하장 > 입고=작업대 (~입하재고) > (보관재고~) 입고이동=존/셀
 - 출고 : 최초=셀 > (출하재고~) 출고이동 > 피킹=작업대 > 패킹 > 독 > 출하(=상차)
 - 이동 : 입고이동, 출고이동, 재고확인이동, 등급변경이동?
 - 보관 : SSA(자주나가서상자째로), SA(빠른설비), A/B/C/D(일반설비), F(안나가서상자째로)
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ(여기위까지함)
디자인패턴 : MVC, MVVM, 빈즈, 싱글턴
인프라 : 웹, CDN, API, WAS, DB
네트워크 : HTTP, 소켓
전시 : 엔진, 템플릿, 코너, UNIT, OSMU, 뷰캐시, DTO캐시

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