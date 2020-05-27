mui.init();
function addDistrict(){
	var district = $("#district").val();
	var city = $("#city").find("option:selected").text();
	if(isNull(district)){
		mui.toast("输入不能为空");
	}else{
		$.ajax({
			type: "POST",//方法类型
			dataType: "json",//预期服务器返回的数据类型
			url: "http://49.232.119.91:8080/SmartCommunity_war/organize/saveDistrict" ,//url
			data: {
				"city" : city,
				"district" : district
			},
			success: function (data) {
				console.log(JSON.stringify(data));
				mui.toast('添加成功')
			},
			error : function(result) {
				// console.log(result.xhr.statusText)
			   mui.toast("服务器繁忙");
			}
		});
	}
}

function queryDistrict(){
	var district = $("#queryDistrict").val();
	$.ajax({
		type: "POST",//方法类型
		dataType: "json",//预期服务器返回的数据类型
		url: "http://49.232.119.91:8080/SmartCommunity_war/organize/getDistrictByName" ,//url
		data: {
			"district" : district
		},
		success: function (data) {
			console.log(JSON.stringify(data));
			localStorage.setItem("DistrictId",data.district.id);
			localStorage.setItem("city", data.district.city)
			$("#showDistrict").attr('placeholder', data.district.district)
		},
		error : function(result) {
			// console.log(result.xhr.statusText)
		   mui.toast("服务器繁忙");
		}
	});
}

function update(){
	var district = $("#queryDistrict").val();
	var city = localStorage.getItem("city");
	var id = localStorage.getItem("DistrictId");
	$.ajax({
		type: "POST",//方法类型
		dataType: "json",//预期服务器返回的数据类型
		url: "http://49.232.119.91:8080/SmartCommunity_war/organize/updateDistrict" ,//url
		data: {
			"district" : district,
			"id":id,
			"city":city
		},
		success: function (data) {
			console.log(JSON.stringify(data));
			mui.toast("修改成功")
			$("#showDistrict").attr('placeholder', district)
		},
		error : function(result) {
			// console.log(result.xhr.statusText)
		   mui.toast("服务器繁忙");
		}
	});
}


function deleteDistrict(){
	var id = localStorage.getItem("DistrictId");
	$.ajax({
		type: "POST",//方法类型
		dataType: "json",//预期服务器返回的数据类型
		url: "http://49.232.119.91:8080/SmartCommunity_war/organize/deleteDistrict" ,//url
		data: {
			"id":id,
		},
		success: function (data) {
			console.log(JSON.stringify(data));
			mui.toast("删除成功")
			$("#queryDistrict").val("");
			$("#showDistrict").attr('placeholder', "")
		},
		error : function(result) {
			// console.log(result.xhr.statusText)
		   mui.toast("服务器繁忙");
		}
	});
}

