import sliderFabric from "../slider_fabrick/script"
function initialSliders() {
	if($(".slider_doc").length!=0)
	{

		let doc_slider={
			delta:0,   // Задает размер смещения слайдера
			number_card_show_moblie: 1,
			number_card_show_planshet: 2,
			number_card_show_desctop: 4,
			total_number: 0, // Общее количество карточек в слайдере
			current_slide: 0, // Текущее значение в слайдере
			slider_box_class: "slider_doc_box",
			slider_item_class: "slider_doc_item",
			click_arrow_left_class: "slider_doc_left",
			click_arrow_right_class: "slider_doc_right",
			margin_item: 10,
		};
		sliderFabric(doc_slider);
	}
	if($(".section_certificates").length!=0)
	{

		let doc_certificates={
			delta:0,
			number_card_show_moblie: 1,
			number_card_show_planshet: 2,
			number_card_show_desctop: 4,
			total_number: 0,
			current_slide: 0,
			slider_box_class: "slider_box",
			slider_item_class: "item_slider",
			click_arrow_left_class: "slider_sertificat_left",
			click_arrow_right_class: "slider_sertificat_right",
			margin_item: 0,
		};
		sliderFabric(doc_certificates);
	}
	if($(".reviews_slider").length!=0)
	{

		let reviews_slider={
			delta:0,
			number_card_show_moblie: 1,
			number_card_show_planshet: 1,
			number_card_show_desctop: 1,
			total_number: 0,
			current_slide: 0,
			slider_box_class: "container_review",
			slider_item_class: "item_review",
			click_arrow_left_class: "slider_review_left",
			click_arrow_right_class: "slider_review_right",
			margin_item: 0,
		};
		sliderFabric(reviews_slider);
	}
	if($(".company_slider_wrapper").length!=0)
	{
		let company_slider={
			delta:0,
			number_card_show_moblie: 1,
			number_card_show_planshet: 3,
			number_card_show_desctop: 5,
			total_number: 0,
			current_slide: 0,
			slider_box_class: "company_slider_box",
			slider_item_class: "company_slider_item",
			click_arrow_left_class: "slider_company_left",
			click_arrow_right_class: "slider_company_right",
			margin_item: 0,
		};
		sliderFabric(company_slider);
	}
	if($(".vacancy_box").length!=0)
	{
		let vacancy_slider={
			delta:0,
			number_card_show_moblie: 1,
			number_card_show_planshet: 2,
			number_card_show_desctop: 3,
			total_number: 0,
			current_slide: 0,
			slider_box_class: "vacancy_box",
			slider_item_class: "vacancy_item",
			click_arrow_left_class: "slider_vacancy_left",
			click_arrow_right_class: "slider_vacancy_right",
			margin_item: 10,
		};
		sliderFabric(vacancy_slider);
	}
	if($(".shares_slider").length!=0)
	{
		let shares_slider={
			delta:0,
			number_card_show_moblie: 1,
			number_card_show_planshet: 1,
			number_card_show_desctop: 1,
			total_number: 0,
			current_slide: 0,
			slider_box_class: "shares_slider_wrapper",
			slider_item_class: "shares_slider_item",
			click_arrow_left_class: "shares_slider_arrow_left",
			click_arrow_right_class: "shares_slider_arrow_right",
			margin_item: 0,
		};
		sliderFabric(shares_slider);
	}
}
export default initialSliders