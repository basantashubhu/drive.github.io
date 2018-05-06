$(document).ready(function(){
	$(window).on('scroll',function(){
			if ($(window).scrollTop()>=100){
				$('#chevron-up').css('display','block');
			}else{				
				$('#chevron-up').css('display','none');
			}
			if ($(window).scrollTop() == ($(document).height()-$(window).height())) {
				$('#chevron-up').css({
					'color' : 'brown',
					'border-color' : '#fff'
				});
			}else{
				$('#chevron-up').css({
					'color' : 'gray',
					'border-color' : 'gray',
					'box-shadow' : '0 3px 5px gray'
				});
			}
		});
		$('#chevron-up').on('click',function(e){
			e.preventDefault();
			var $target = $('body');
			$('html, body').animate({
				'scrollTop' : $target.offset().top
			}, 800, 'swing');
		});
		$('#tr-program').on('click',function(e){
			e.preventDefault();
			var $target = $('#program');
			$('html, body').animate({
				'scrollTop' : $target.offset().top
			}, 800, 'swing');
		});
		$('#chevron-up').on('mouseover',function(){
			$('#chevron-up').css({
				'border-color': 'brown',
				'transition': '.3s',
				'cursor': 'pointer'
			});
		})
		$('#chevron-up').on('mouseleave',function(){
			$('#chevron-up').css({
				'border-color': 'gray',
				'transition': '.3s'
			});
		})
		$('#collapse-form').on('click',function(){
			$('#form1').toggle('400');
		});

});