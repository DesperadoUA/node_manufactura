function create_slider(initial_obj_slider){
	const WIDTH_SCREEN = screen.width;
	if(WIDTH_SCREEN>=320 && WIDTH_SCREEN<768) initial_obj_slider.number_card_show=initial_obj_slider.number_card_show_moblie;
	else if(WIDTH_SCREEN>=768 && WIDTH_SCREEN<1200) initial_obj_slider.number_card_show=initial_obj_slider.number_card_show_planshet; //Определяем количество врачей в слайдере
	else if(WIDTH_SCREEN>=1200) initial_obj_slider.number_card_show=initial_obj_slider.number_card_show_desctop;

	initial_obj_slider.delta=$("."+initial_obj_slider.slider_box_class+"").width()/initial_obj_slider.number_card_show;
	initial_obj_slider.total_number=$("."+initial_obj_slider.slider_item_class+"").length;

	if(initial_obj_slider.total_number<initial_obj_slider.number_card_show)
	{
		$("."+initial_obj_slider.click_arrow_left_class+"").fadeOut();
		$("."+initial_obj_slider.click_arrow_right_class+"").fadeOut();
	}

	$("."+initial_obj_slider.slider_box_class+"").width(initial_obj_slider.delta*initial_obj_slider.total_number);
	$("."+initial_obj_slider.slider_item_class+"").width(initial_obj_slider.delta-initial_obj_slider.margin_item*2);

	$("."+initial_obj_slider.click_arrow_right_class+"").click(function(){
		initial_obj_slider.current_slide++;
		if(initial_obj_slider.current_slide==initial_obj_slider.total_number-initial_obj_slider.number_card_show+1) initial_obj_slider.current_slide=0;
		initial_obj_slider.mov();
	});

	$("."+initial_obj_slider.click_arrow_left_class+"").click(function(){
		initial_obj_slider.current_slide--;
		if(initial_obj_slider.current_slide<0) initial_obj_slider.current_slide=initial_obj_slider.total_number-initial_obj_slider.number_card_show;
		initial_obj_slider.mov();
	});
	initial_obj_slider.mov = function()  // Метод смещения слайдера на заданную дельту
	{
		$("."+initial_obj_slider.slider_box_class+"").css("margin-left", -(initial_obj_slider.delta*initial_obj_slider.current_slide));
	}
}
export default create_slider;