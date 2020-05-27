mui.ready(loadPage());
			function loadPage(){
				var username = localStorage.getItem("username");
				$.ajax({
					type: "POST",//方法类型
					dataType: "json",//预期服务器返回的数据类型
					url: baseUrl+"score/getScoreById" ,//url
					data: {			
						"username":username
					},
					success: function (result) {
						var scores = result.scores;
						// console.log(result.scores);
						// $("#mygood").empty();
						for (let score of scores) {
							var scoreTmpl = tmpl(score);
							$("#score-inf").append(scoreTmpl);
						}
					},
					error : function(result) {
					   mui.toast("服务器繁忙");
					   
					}
				});
			}
			
			function tmpl (obj) {
				var tmpl = '<div class="score-pre">'
							+'<div class="score-pre-score">'
							+obj.score+
							'</div>'
							+'<div class="score-pre-score-text">'
							+'分'
							+'</div>'
							+'<div class="score-pre-score-data">'
							+obj.socredate
							+'</div>'
							+'</div>'
				return tmpl;
			}
			
			
			