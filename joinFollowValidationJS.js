<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>shinsegae central city</title>    
	<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
	<script type="text/javascript">
		function save(){
			if(validate.check("searchArea")){
				
				if(!$("[name=\"MEMBID\"]").hasClass("checked")){
					commonUtil.msgBox("아이디 중복 확인해주세요.");
					$("[name=\"MEMBID\"]").focus();
					return;
				}
				
				if(!$("#searchArea input.MEMBPW_check").hasClass("checked")){
					commonUtil.msgBox("비밀번호을 확인해주세요.");
					return;
				}
				if($("[name=\"MEMPCD\"]").val() ==""){
					commonUtil.msgBox("우편번호와 주소는 필수 입력 항목입니다. 우편번호를 검색해주세요.");
					return false;
				}
				if($("[name=\"MEMAD2\"]").val() ==""){
					$("[name=\"MEMAD2\"]").focus();
					commonUtil.msgBox("상세주소는 필수 입력 항목입니다.");
					return;
				}
				if(!confirm("입력한 정보들로 회원가입 하시겠습니까?")) return;
					
				var param = dataBind.paramData("searchArea");
				
				var chk = 0;
				var currentPwd = $("[name=\"MEMBPW\"]").val();
				var membid = $("[name=\"MEMBID\"]").val();
				
				if(currentPwd.search(/[0-9]/g) != -1) chk++;
				if(currentPwd.search(/[A-Z]/g) != -1) chk++;
				if(currentPwd.search(/[a-z]/g) != -1) chk++;
				if(currentPwd.search(/[!@#$%^&*?\]\[{}()\-\+;:`_~.,]/g) != -1) chk++;
				if(chk < 2)
				{
					commonUtil.msgBox("비밀번호는 숫자, 영대문자, 영소문자, 특수문자를 두가지 이상 혼용하여야 합니다."); 
					return;
				}
				if(chk == 2 && !/^[a-zA-Z0-9a-zA-Z0-9!@#$%^&*?\]\[{}()\-\+;:`_~.,]{10,15}$/.test(currentPwd))
				{			
					commonUtil.msgBox("비밀번호는 숫자, 영대문자, 영소문자, 특수문자 중 2종류 조합시 10~15자리를 사용해야 합니다."); 
					return;			
				}
				if(chk > 2 && !/^[a-zA-Z0-9a-zA-Z0-9!@#$%^&*?\]\[{}()\-\+;:`_~.,]{8,15}$/.test(currentPwd))
				{
					commonUtil.msgBox("비밀번호는 숫자, 영대문자, 영소문자, 특수문자 중 3종류 이상 조합시 8~15자리를 사용해야 합니다."); 
					return;							
				}
				if(/(\w)\1\1\1/.test(currentPwd) || isContinuedValue(currentPwd)){			
					commonUtil.msgBox("비밀번호에 4자 이상의 연속 또는 반복 문자 및 숫자를 사용하실 수 없습니다."); 
					return;				
				}
				if(currentPwd.search(membid) > -1)
				{
					commonUtil.msgBox("아이디가 포함된 비밀번호는 사용하실 수 없습니다."); 
					return;							
				}
				param.put("MEMCLA","20");//개인 : 20
				
				var json = netUtil.sendData({
			    	url : "/b2cpublic/insert/json/member.data",
			    	param : param
			    });
				
				if(json && json.data && json.data == "S"){
					window.location.href="/b2cpublic/personal/join_personal_step3.page";
				}else{
					commonUtil.msgBox("KR_M0001");
				}
			}
		}
		function isContinuedValue(value) {
	        var intCnt1 = 0;
	        var intCnt2 = 0;
	        var temp0 = "";
	        var temp1 = "";
	        var temp2 = "";
	        var temp3 = "";
	 
	        for (var i = 0; i < value.length-3; i++) {
	            temp0 = value.charAt(i);
	            temp1 = value.charAt(i + 1);
	            temp2 = value.charAt(i + 2);
	            temp3 = value.charAt(i + 3);
	 
	            if (temp0.charCodeAt(0) - temp1.charCodeAt(0) == 1
	                    && temp1.charCodeAt(0) - temp2.charCodeAt(0) == 1
	                    && temp2.charCodeAt(0) - temp3.charCodeAt(0) == 1) {
	                intCnt1 = intCnt1 + 1;
	            }
	 
	            if (temp0.charCodeAt(0) - temp1.charCodeAt(0) == -1
	                    && temp1.charCodeAt(0) - temp2.charCodeAt(0) == -1
	                    && temp2.charCodeAt(0) - temp3.charCodeAt(0) == -1) {
	                intCnt2 = intCnt2 + 1;
	            }
	        }
	 
	        return (intCnt1 > 0 || intCnt2 > 0);
	    };	
		function idCheck(){
			if($("[name=\"MEMBID\"]").hasClass("checked")){
				$("[name=\"MEMBID\"]").siblings().removeClass("btn_white_s").addClass("btn_gray_s")
				$("[name=\"MEMBID\"]").removeClass("checked").removeAttr("readonly");
				$(".id_check").text("중복확인");
				return;
			}else if(!$("[name=\"MEMBID\"]").val()){
				commonUtil.msgBox("아이디를 입력해주세요.");
			}else if($("[name=\"MEMBID\"]").val().length<5){
				commonUtil.msgBox("아이디는 5글자 이상이여야 합니다.");
			}else{
				var param = new DataMap();
				
				var chk = 0;
				var id = $("[name=\"MEMBID\"]").val();
				if(id.search(/\s/) !== -1){
					commonUtil.msgBox("스페이스입력 불가합니다.");
					$("[name=\"MEMBID\"]").val("");
					return
				}
				if(id.search(/[A-Z]/g) != -1) chk++;
				if(id.search(/[!@#$%^&*?\]\[{}()\-\+;:`_~.,]/g) != -1) chk++;
				if(id.search(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g) != -1) chk++;
				if(id.search(/^[0-9]/g) != -1) chk++;
				if(chk !== 0){
					commonUtil.msgBox("아이디는 영문 소문자로 시작, 영문 소문자-숫자조합으로 사용하세요.");
					$("[name=\"MEMBID\"]").val("");
					return;
				}
				
				param.put("MEMBID",id);
				var json = netUtil.sendData({
			    	url : "/b2cpublic/json/idCheck.data",
			    	param : param
			    });
				if(json && json.data && json.data == "S"){
					commonUtil.msgBox("사용가능한 아이디입니다.");
					$("[name=\"MEMBID\"]").siblings().removeClass("btn_gray_s").addClass("btn_white_s");
					$("[name=\"MEMBID\"]").addClass("checked").prop("readonly","readonly");
					$(".id_check").text("수정");
					$("small.id").css('display','none');
				}else{
					commonUtil.msgBox("이미 사용중인 아이디입니다.");
					$("[name=\"MEMBID\"]").val("");
				}
			}
		}
		function execDaumPostcode() {
	        new daum.Postcode({
	            oncomplete: function(data) {
	                var addr = ''; // 주소 변수
	                var extraAddr = ''; // 참고항목 변수

	                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
	                    addr = data.roadAddress;
	                } else { // 사용자가 지번 주소를 선택했을 경우(J)
	                    addr = data.jibunAddress;
	                }
	                if(data.userSelectedType === 'R'){
	                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
	                        extraAddr += data.bname;
	                    }
	                    if(data.buildingName !== '' && data.apartment === 'Y'){
	                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
	                    }
	                    if(extraAddr !== ''){
	                        extraAddr = ' (' + extraAddr + ')';
	                    }
	                    document.getElementById("MEMAD2").value = extraAddr;
	                
	                } else {
	                    document.getElementById("MEMAD2").value = '';
	                }
	                document.getElementById('MEMPCD').value = data.zonecode;
	                document.getElementById("MEMAD1").value = addr;
	                document.getElementById("MEMAD2").focus();
	            }
	        }).open();
	    }
		
	</script>
</head>
<body>
<div class="wrap sub">
	<%@ include file="/B2C/include/menu.jsp" %>
	<div class="container">
		<div class="step_box_wrap box_bg">
			<div class="step_box">
				<h2 class="h2_title">개인 회원가입</h2>
				<ul class="step_list step_03">
					<li class="complete">
						<span class="txt_step">STEP 01</span>
						<strong class="txt_con">이용약관</strong>
					</li>
					<li class="selected">
						<span class="txt_step">STEP 02</span>
						<strong class="txt_con">정보입력</strong>
					</li>
					<li>
						<span class="txt_step">STEP 03</span>
						<strong class="txt_con">가입완료</strong>
					</li>
				</ul>
			</div>
		</div>
		<div class="find">
			<p>
				순서대로 정보를 입력하세요. <br />
				재 입력을 원하시면 새로고침을 눌려주세요. <br />
			</p>
			<div id="searchArea" style="padding-top:10px">
				<label>
					아이디
					<input type="text" name="MEMBID" placeholder="*필수* 아이디 입력" validate="required" UIFormat="S 20">
					<button class="btn btn_gray_s id_check" onclick="idCheck()">중복확인</button>
				</label>
				<small class="id">
					*아이디 중복 확인 부탁드립니다. <br/>
					1.영문소문자 시작 2.영소문자, 숫자 조합 5~20자까지 사용가능
				</small>
				<label>
					비밀번호
					<input type="password" name="MEMBPW" placeholder="*필수* 비밀번호 입력" validate="required" UIFormat="S 15">
				</label>
				<small class="password">
					*1.영문 2.숫자 3.특수문자 조합(대소문자 구분)2가지 문자혼용시 10자이상, 3가지 문자 혼용시 8자이상 15자 까지<br/>
					*동일 문자/숫자 4자이상, 연속된 문자 사용불가 / 아이디 포함 불가
				</small>
				<label>
					비밀번호 확인
					<input type="password" class="MEMBPW_check" placeholder="*필수* 비밀번호 확인" validate="required" UIFormat="S 15">
				</label>
				<small class="password_check">
					*비밀번호를 확인해주세요.
				</small>
				<label>
					성명
					<input type="text" name="MEMNAM" placeholder="*필수* 이름 입력" validate="required" UIFormat="S 20">
				</label>
				<label>
					휴대폰 번호
					<input type="text" placeholder="*필수* 01000000000" name="MEMCPH" validate="required phone" UIFormat="NS 12">
					<button class="btn btn_gray_s" onclick="phoneCheck()">인증</button>
				</label>
				<label>
					추가 전화번호
					<input type="text" name="MEMTPH" placeholder="*선택* 020000000" validate="phone" UIFormat="NS 12">
				</label>
				<label>
					E-mail
					<input type="text" placeholder="*필수* sample@sample.com" name="MEMEMA" validate="required" UIFormat="S 40">
					<!-- 
					<button class="btn btn_gray_s email_check" onclick="emailCheck()">중복확인</button>
					 -->
				</label>
				<label>
					우편번호
					<input type="text" placeholder="*필수*" id="MEMPCD" name="MEMPCD" validate="required" readonly="readonly">
					<button class="btn btn_gray_s mempcd">검색</button>
				</label>
				<label>
					주소
					<input type="text" placeholder="*필수*" id="MEMAD1" name="MEMAD1" validate="required"  readonly="readonly">
				</label>
				<label>
					상세주소
					<input type="text" placeholder="*필수* 특수문자 ()만 가능" id="MEMAD2" name="MEMAD2" validate="required" UIFormat="S 40">
				</label>
				<label>
					정보 수신여부
					<input type="checkbox" name="MEMRSC" id="r1" name="radio_r" /> <label for="r1" style="width:50px;">SMS</label>
					<input type="checkbox" name="MEMREC" id="r2" name="radio_r" /> <label for="r2" style="width:70px;">E-mail</label>
					<input type="checkbox" name="MEMRPC" id="r3" name="radio_r" /> <label for="r3">Push알람</label>
				</label>
			</div>
			<div class="btn_box">
				<a class="btn btn_white_b" href="/b2cpublic/personal/join_personal_step1.page">이전</a>
				<a class="btn btn_gray_b" onclick="save()">다음</a>
			</div>
			<!-- // button box -->
		</div>
	</div>
</div>
<script type="text/javascript">
//Validation Tab&Focus Flow Controll
$("#searchArea [name=\"MEMBPW\"]").focus(function(){
	if(!$("[name=\"MEMBID\"]").hasClass("checked")){
		$("small.id").css('display','block');
		$("[name=\"MEMBID\"]").focus();
	}else if($("[name=\"MEMBID\"]").hasClass("checked")){
		$("small.id").css('display','none');
	}
});
$("#searchArea .MEMBPW_check").focus(function(){
	var chk = 0;
	var currentPwd = $("[name=\"MEMBPW\"]").val();
	if(!$("[name=\"MEMBID\"]").hasClass("checked")){
		$("small.id").css('display','block');
		$("[name=\"MEMBID\"]").focus();
		return false;
	}
	if(currentPwd ==""){
		$("[name=\"MEMBPW\"]").focus();
		return false;
	}
	if(currentPwd.search(/\s/) !== -1){
		commonUtil.msgBox("스페이스입력 불가합니다.");
		$("[name=\"MEMBPW\"]").val("").focus();
		return false;
	}
	if(currentPwd.search(/[0-9]/g) !== -1) chk++;
	if(currentPwd.search(/[A-Z]/g) !== -1) chk++;
	if(currentPwd.search(/[a-z]/g) !== -1) chk++;
	if(currentPwd.search(/[!@#$%^&*?\]\[{}()\-\+;:`_~.,]/g) !== -1) chk++;
	if(chk < 2){
		commonUtil.msgBox("비밀번호는 숫자, 영대문자, 영소문자, 특수문자를 두가지 이상 혼용하여야 합니다.");
		$("#searchArea input.MEMBPW_check").val("");
		$("[name=\"MEMBPW\"]").focus();
		return false;
	}
	if(chk == 2 && !/^[a-zA-Z0-9!@#$%^&*?\]\[{}()\-\+;:`_~.,]{10,15}$/.test(currentPwd))
	{			
		commonUtil.msgBox("비밀번호는 숫자, 영대문자, 영소문자, 특수문자 중 2종류 조합시 10~15자리를 사용해야 합니다."); 
		$("[name=\"MEMBPW\"]").focus();
		$("#searchArea input.MEMBPW_check").val("");
		return false;			
	}
	if(chk > 2 && !/^[a-zA-Z0-9!@#$%^&*?\]\[{}()\-\+;:`_~.,]{8,15}$/.test(currentPwd)){
		commonUtil.msgBox("비밀번호는 숫자, 영대문자, 영소문자, 특수문자 중 3종류 이상 조합시 8~15자리를 사용해야 합니다."); 
		$("[name=\"MEMBPW\"]").focus();
		$("#searchArea input.MEMBPW_check").val("");
		return false;							
	}
	if(/(\w)\1\1\1/.test(currentPwd) || isContinuedValue(currentPwd)){			
		commonUtil.msgBox("비밀번호에 4자 이상의 연속 또는 반복 문자 및 숫자를 사용하실 수 없습니다.");
		$("[name=\"MEMBPW\"]").focus();
		$("#searchArea input.MEMBPW_check").val("");
		return false;				
	}
	if(currentPwd.search($("[name=\"MEMBID\"]").val()) > -1){
		commonUtil.msgBox("아이디가 포함된 비밀번호는 사용하실 수 없습니다.");
		$("[name=\"MEMBPW\"]").focus();
		$("#searchArea input.MEMBPW_check").val("");
		return false;							
	}
});
$("#searchArea [name=\"MEMNAM\"]").focus(function(){
	var checkPwd = $("#searchArea input.MEMBPW_check");
	if(!$("[name=\"MEMBID\"]").hasClass("checked")){
		$("small.id").css('display','block');
		$("[name=\"MEMBID\"]").focus();
		return false;
	}
	if($("[name=\"MEMBPW\"]").val() ===""){
		$("[name=\"MEMBPW\"]").focus();
		return false;
	}
	if(checkPwd.val()===$("[name=\"MEMBPW\"]").val()){
		$("#searchArea input.MEMBPW_check").addClass("checked");
		$("small.password_check").css('display','none');
	}else{
		$("#searchArea input.MEMBPW_check").removeClass("checked")
		$("small.password_check").css('display','block');
		$("#searchArea input.MEMBPW_check").focus();
		return false;
	}
});

$("#searchArea [name=\"MEMCPH\"]").focus(function(){
	var name = $("[name=\"MEMNAM\"]").val();
	if(!$("[name=\"MEMBID\"]").hasClass("checked")){
		$("small.id").css('display','block');
		$("[name=\"MEMBID\"]").focus();
		return false;
	}
	if($("[name=\"MEMBPW\"]").val() ===""){
		$("[name=\"MEMBPW\"]").focus();
		return false;
	}
	if(!$("#searchArea input.MEMBPW_check").hasClass("checked")){
		$("#searchArea input.MEMBPW_check").val("").focus();
		$("small.password_check").css('display','block');
		return false;
	}
	if($("[name=\"MEMNAM\"]").val() ===""){
		$("[name=\"MEMNAM\"]").focus();
		return false;
	}
	if(name===""){
		commonUtil.msgBox("이름을 입력해주세요.");
		$("[name=\"MEMNAM\"]").focus();
	}else{
		var chk = 0;
		if(name.search(/\s/) !== -1){
			commonUtil.msgBox("스페이스입력 불가합니다.");
			$("[name=\"MEMNAM\"]").val("");
			return false;
		}
		if(name.search(/[!@#$%^&*?\]\[{}()\-\+;:`_~.,]/g) != -1) chk++;
		if(name.search(/[0-9]/g) != -1) chk++;
		if(chk !== 0){
			commonUtil.msgBox("이름에 숫자/특수문자를 입력할 수 없습니다.");
			$("[name=\"MEMNAM\"]").val("").focus();
		}
	}
});
$("#searchArea [name=\"MEMTPH\"]").focus(function(){
	var phone = $("[name=\"MEMCPH\"]").val();
	var chk = 0;
	if(!$("[name=\"MEMBID\"]").hasClass("checked")){
		$("small.id").css('display','block');
		$("[name=\"MEMBID\"]").focus();
		return false;
	}
	if($("[name=\"MEMBPW\"]").val() ===""){
		$("[name=\"MEMBPW\"]").focus();
		return false;
	}
	if(!$("#searchArea input.MEMBPW_check").hasClass("checked")){
		$("#searchArea input.MEMBPW_check").focus();
		return false;
	}
	if($("[name=\"MEMNAM\"]").val() ===""){
		$("[name=\"MEMNAM\"]").focus();
		return false;
	}
	if(phone ===""){
		$("[name=\"MEMCPH\"]").focus();
		return false;
	}
	if(phone.length <10){
		commonUtil.msgBox("휴대폰번호가 잘못되었습니다.");
		$("[name=\"MEMCPH\"]").val("").focus();
	}
	if(phone.search(/\s/) !== -1){
		commonUtil.msgBox("스페이스입력 불가합니다.");
		$("[name=\"MEMCPH\"]").val("");
		return false;
	}
	if(phone.search(/[!@#$%^&*?\]\[{}()\-\+;:`_~.,]/g) != -1) chk++;
	if(phone.search(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g) != -1) chk++;
	if(phone.search(/[a-z]/g) !== -1) chk++;
	if(phone.search(/[A-Z]/g) !== -1) chk++;
	if(chk !== 0){
		commonUtil.msgBox("휴대폰번호에 숫자만 입력하세요.");
		$("[name=\"MEMCPH\"]").val("").focus();
	}
});
$("#searchArea [name=\"MEMEMA\"]").focus(function(){
	var phone = $("[name=\"MEMTPH\"]").val();
	var chk = 0;
	if(!$("[name=\"MEMBID\"]").hasClass("checked")){
		$("small.id").css('display','block');
		$("[name=\"MEMBID\"]").focus();
		return false;
	}
	if($("[name=\"MEMBPW\"]").val() ==""){
		$("[name=\"MEMBPW\"]").focus();
		return false;
	}
	if(!$("#searchArea input.MEMBPW_check").hasClass("checked")){
		$("#searchArea input.MEMBPW_check").focus();
		return false;
	}
	if($("[name=\"MEMNAM\"]").val() ===""){
		$("[name=\"MEMNAM\"]").focus();
		return false;
	}
	if($("[name=\"MEMCPH\"]").val() ===""){
		$("[name=\"MEMCPH\"]").focus();
		return false;
	}
	if(phone ===""){
		$("[name=\"MEMTPH\"]").val(" ");
	}else if(phone.length === 1 && phone === " "){
		$("[name=\"MEMTPH\"]").val(" ");
	}else if(phone.length <10){
		commonUtil.msgBox("휴대폰번호가 잘못되었습니다.");
		$("[name=\"MEMTPH\"]").focus();
		return false;
	} 
	if(phone.search(/[!@#$%^&*?\]\[{}()\-\+;:`_~.,]/g) != -1) chk++;
	if(phone.search(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g) != -1) chk++;
	if(phone.search(/[a-z]/g) != -1) chk++;
	if(phone.search(/[A-Z]/g) != -1) chk++;
	if(chk !== 0){
		commonUtil.msgBox("휴대폰번호에 숫자만 입력하세요.");
		$("[name=\"MEMTPH\"]").val("").focus();
	}
});
$("#searchArea .mempcd").click(function(){
	var email = $("[name=\"MEMEMA\"]").val();
	var chk = 0;
	var regEx = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/g;
	if(!$("[name=\"MEMBID\"]").hasClass("checked")){
		$("small.id").css('display','block');
		$("[name=\"MEMBID\"]").focus();
		return false;
	}
	if($("[name=\"MEMBPW\"]").val() ===""){
		$("[name=\"MEMBPW\"]").focus();
		return false;
	}
	if(!$("#searchArea input.MEMBPW_check").hasClass("checked")){
		$("#searchArea input.MEMBPW_check").focus();
		return false;
	}
	if($("[name=\"MEMNAM\"]").val() ===""){
		$("[name=\"MEMNAM\"]").focus();
		return false;
	}
	if($("[name=\"MEMCPH\"]").val() ===""){
		$("[name=\"MEMCPH\"]").focus();
		return false;
	}
	if(email===""){
		commonUtil.msgBox("이메일을 필수 입력 항목입니다.");
		$("[name=\"MEMEMA\"]").focus();
		return false;
	}else{
		if(email.search(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g) !== -1){
			commonUtil.msgBox("올바른 이메일 형식이 아닙니다.");
			$("[name=\"MEMEMA\"]").val("").focus();
			return false
		}	
		if(email.search(/[@]/g) !== -1) chk++;
		if(email.search(/[.]/g) !== -1) chk++;
		if(email.search(/[a-z]$/g) != -1) chk++;
		if(email.search(regEx) !== -1) chk++;

		if(chk !== 4){
			commonUtil.msgBox("올바른 이메일 형식이 아닙니다.");
			$("[name=\"MEMEMA\"]").val("").focus();
			return false;
		}
		execDaumPostcode();
	}
});

$("#searchArea [type=\"checkbox\"]").focus(function(){
	var memad2 = $("[name=\"MEMAD2\"]").val();
	var chk = 0;
	var regExAddress = /[!@#$%^&*?\]\[{}\-\+;:`_~.]/g;
	if(!$("[name=\"MEMBID\"]").hasClass("checked")){
		$("small.id").css('display','block');
		$("[name=\"MEMBID\"]").focus();
		return false;
	}
	if($("[name=\"MEMBPW\"]").val() ===""){
		$("[name=\"MEMBPW\"]").focus();
		return false;
	}
	if(!$("#searchArea input.MEMBPW_check").hasClass("checked")){
		$("#searchArea input.MEMBPW_check").focus();
		return false;
	}
	if($("[name=\"MEMNAM\"]").val() ===""){
		$("[name=\"MEMNAM\"]").focus();
		return false;
	}
	if($("[name=\"MEMCPH\"]").val() ===""){
		$("[name=\"MEMCPH\"]").focus();
		return false;
	}
	if($("[name=\"MEMEMA\"]").val() ===""){
		$("[name=\"MEMEMA\"]").focus();
		return false;
	}
	if($("[name=\"MEMPCD\"]").val() ===""){
		commonUtil.msgBox("우편번호와 주소는 필수 입력 항목입니다. 우편번호를 검색해주세요.");
		return false;
	}
	if(memad2.search(regExAddress) != -1) chk++;
	if(chk !== 0){
		commonUtil.msgBox("상세주소에 (),를 제외한 특수문자를 입력할 수 없습니다.");
		$("[name=\"MEMAD2\"]").val("").focus();
		return;
	}
});
</script>
</body>
</html>
