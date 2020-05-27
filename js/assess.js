
function login(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	
	if(isNull(username)||isNull(password)){
		mui.toast("用户名和密码不能为空");
	}else{
		$.ajax({
			type: "POST",//方法类型
			dataType: "json",//预期服务器返回的数据类型
			url: "http://49.232.119.91:8080/SmartCommunity_war/login/login" ,//url
			data: {
				"username" : username,
				"password" : password
			},
			success: function (data) {
				console.log(JSON.stringify(data));
			    if (result.result == "success") {
					//将登录数据放入本地存储
					localStorage.setItem("username",username);
					localStorage.setItem("password", password)
					//跳转页面
			        mui.openWindow({
			            id: 'index.html',
			            url: 'index.html',
			            extras:{
			                data: result
			            }
			        });
			    }else{
					mui.toast("用户名或密码错误");
			    }
			},
			error : function(result) {
				// console.log(result.xhr.statusText)
			   mui.toast("服务器繁忙");
			}
		});
	}
	
	
}
