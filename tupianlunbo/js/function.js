$(function(){
	(function(){
		var curr = 0;
		var tudo = 0;
		var flag;
		$('.content li').each(function(i){
			$(this).click(function(){
				curr = i;
				$('.content p').eq(i).fadeIn('slow').siblings('p').hide();
				$(this).siblings('li').removeClass('bg_orange').end().addClass('bg_orange');
				flag = false;
				return false;
			});
		});
		var pg = function(flag){
			if(flag){
				if(curr == 0 ){
					tudo = 3;
				}else{
					tudo = (curr - 1)%4;
				}
			}else{
				tudo = (curr + 1)%4;
			}
			$('.content li').eq(tudo).click();
		};
		var timer = setInterval(function(){
			/*$('.content li').eq(curr).click();*/
			pg(flag);
			$('.content li').eq(tudo).click();
		},2000);
		$('.content li').hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(function(){
				pg(flag);
				$('.content li').eq(tudo).click();
			},2000);
		});

	})();
	
});