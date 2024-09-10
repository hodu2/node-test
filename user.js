/**
 * 
 */

	// 아이디 빈 값처리 return 포커스온
	// 아이디는 5자리 이상, 16자리 미만
	// 비밀번호 빈 값처리
	// 비밀번호 8자리 이상 처리
	// 비말번호 == 비밀번호 확인
	// 이름 빈 값처리
	// 휴대폰 번호 빈값 처리
	// 회원가입 폼 value 확인하는 자바스크립트
		function sendit() {
		    // 폼의 입력값 가져오기
		    const form = document.joinForm;
		    const userId = form.userid.value.trim();
		    const userPw = form.userpw.value.trim();
		    const userPwRe = form.userpw_re.value.trim();
		    const userName = form.username.value.trim();
		    const userPhone = form.userphone.value.trim();

		    if (userId === "") {
		        alert("아이디를 입력해주세요.");
		        form.userid.focus();
		        return false;
		    }
			
			if(userId.length < 5 || userId.length >= 16){
				alert("아이디는 5자리 이상 16자리 미만입니다.")
				form.userid.focus();
				return false;
			}

		    if (userPw === "") {
		        alert("비밀번호를 입력해주세요.");
		        form.userpw.focus();
		        return false;
		    }
			if(userPw.length <8){
				alert("비밀번호는 8자리 이상입니다")
				form.userid.focus();
				return false;
						}

		    if (userPw !== userPwRe) {
		        alert("비밀번호가 일치하지 않습니다.");
		        form.userpw_re.focus();
		        return false;
		    }

		    if (userName === "") {
		        alert("이름을 입력해주세요.");
		        form.username.focus();
		        return false;
		    }

		    if (userPhone === "") {
		        alert("휴대폰 번호를 입력해주세요.");
		        form.userphone.focus();
		        return false;
		    }

		    alert("가입이 완료되었습니다.");
		    form.submit();
		}

	function login(){
		// 아이디 빈값체크
		// 비밀번호 빈값체크
		const form = document.frm;
		const userId = form.userid.value.trim();
		const userPw = form.userpw.value.trim();
		
		if (userId === "") {
			  alert("아이디를 입력해주세요.");
			  form.userid.focus();
			   return false;
			    }
	   if (userPw === "") {
		  alert("비밀번호를 입력해주세요.");
		  form.userpw.focus();
	   	 return false;
						    }
			form.submit();				
	}
	function checkId(){
	    let useridElement = document.getElementById("userid"); // DOM 요소를 가져옴
	    let userid = useridElement.value; // 입력된 값을 가져옴

	    if(userid === ""){
	        alert("아이디를 입력해주세요");
	        useridElement.focus(); // DOM 요소에 대해 focus()를 호출해야 함
	        return false; 
	    } else {
	        let xhr = new XMLHttpRequest();
	        xhr.open("GET", "idcheck.jsp?userid=" + userid, true); // 서버로 userid 전송
	        xhr.send();
	        xhr.onreadystatechange = function() {
	            if (xhr.readyState === 4 && xhr.status === 200) {
	                if (xhr.responseText.trim() == "ok") {
	                    document.getElementById("text").innerHTML = "사용할 수 있는 아이디 입니다.";
	                } else {
	                    document.getElementById("text").innerHTML = "중복된 아이디 입니다.";
	                }
	            }
	        }
	    }
	}
