function slider_main_activate() {
		const WIDTH_SCREEN = screen.width;
		if($(".slider").length!=0)
		{
			let main_slider_obj={
				img:[],
				text_1:[],
				text_2:[],
				text_3:[],
				link:[],
				total_slide:0,
				current_slide:0,
			};

			for(let i=0; i<$(".main_slider_item").length; i++)
			{
				if(WIDTH_SCREEN>=320 && WIDTH_SCREEN<768)  main_slider_obj.img.push($(".main_slider_item").eq(i).data("mobileimg"));
				else main_slider_obj.img.push($(".main_slider_item").eq(i).data("desctopimg"));

				main_slider_obj.text_1.push($(".main_slider_item").eq(i).data("text_1"));
				main_slider_obj.text_2.push($(".main_slider_item").eq(i).data("text_2"));
				main_slider_obj.text_3.push($(".main_slider_item").eq(i).data("text_3"));
				main_slider_obj.link.push($(".main_slider_item").eq(i).data("link"));
			}
			main_slider_obj.total_slide=main_slider_obj.img.length;
			change_data_slider();
			initial_slider_timer();
			function initial_slider_timer()
			{
				window.timerId = window.setInterval(main_slider_render, 5000);
			}

			function main_slider_render(){
				main_slider_obj.current_slide++;
				$(".slider").fadeOut(700, change_data_slider);
			}

			function change_data_slider()
			{
				if(main_slider_obj.current_slide==main_slider_obj.total_slide) main_slider_obj.current_slide=0;
				if(main_slider_obj.current_slide<0) main_slider_obj.current_slide=main_slider_obj.total_slide-1;
				$(".slider_img").css("background", 'url('+main_slider_obj.img[main_slider_obj.current_slide]+')');
				$(".slider_title_1").html(main_slider_obj.text_1[main_slider_obj.current_slide]);
				let str=main_slider_obj.text_2[main_slider_obj.current_slide]+'<span>'+main_slider_obj.text_3[main_slider_obj.current_slide]+'</span>';
				$(".slider_title_2").html(str);
				$(".slider").fadeIn(700);
			}

			$(".slider_button_right").click(function(){
				window.clearInterval(window.timerId);
				main_slider_obj.current_slide++;
				change_data_slider();
				window.timerId = window.setInterval(main_slider_render, 5000);
			});
			$(".slider_button_left").click(function(){
				window.clearInterval(window.timerId);
				main_slider_obj.current_slide--;
				change_data_slider();
				window.timerId = window.setInterval(main_slider_render, 5000);
			});
			$(".main_slider_link").click(function(){
				document.location.href = main_slider_obj.link[main_slider_obj.current_slide];
			});
			if(WIDTH_SCREEN>=320 && WIDTH_SCREEN<1200)
			{
				$(".slider_img").height($(".slider_img").width()/2.2);
				$(".slider_button_left").css("margin-left", WIDTH_SCREEN/2-45);
			}
		}
		if($(".slider_default").length !== 0) {
			if(WIDTH_SCREEN>=320 && WIDTH_SCREEN<1200)
			{
				$(".slider_img").height($(".slider_img").width()/2.2);
				$(".slider_button_left").css("margin-left", WIDTH_SCREEN/2-45);
			}
		}
	}
export default slider_main_activate;