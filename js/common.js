var baseUrl = "http://49.232.119.91:8080/SmartCommunity_war/";


function doRequest(url,data,succFun,errFun) {
    $.ajax({
        type: "POST",//方法类型
        dataType: "json",//预期服务器返回的数据类型
        url: baseUrl+url ,//url
        data: data,
        headers: {"token":sessionStorage.getItem("token"),"Content-Type":"application/x-www-form-urlencoded"},
        success: function (result) {
            if (result.code == "000000") {
                succFun(result.data);
            }else{
                alert(result.msg);
            }
        },
        error : function(result) {
            if(errFun && typeof errFun == 'function'){
                errFun(result);
            }else{
                alert("系统繁忙");
            }
        }
    });
}


/**
 * 数据格式化
 */
function toThousands(num, cent) {
    if(isNull(num)) {
        num = 0;
    }
    if(cent==0){}
    else if(isNull(cent)) {
        cent = 2;
    }
    num = parseFloat(num).toFixed(cent);
    var tempNum = num.toString();

    if(tempNum.indexOf('.') == -1) {
        return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    }else {
        var numArr = num.toString().split('.');
        return (numArr[0] || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + '.' +numArr[1];
    }
}

/**
 * 判断数值是否为空
 * @param str    判断的值
 * @returns
 */
function isNull (str) {
    return (str == "null" || str == null || typeof (str) == "undefined" || str == "undefined" || str == "");
}