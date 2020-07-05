function priceAccordion() {
	$('.price_accordeon').click(function(){
		if($(this).hasClass('show')) {
			$(this).removeClass('show');
			$(this).next().fadeOut(700);
			$(this).find('.price_cross').text("+");
		} else {
			$(this).addClass('show');
			$(this).next().fadeIn(700);
			$(this).find('.price_cross').text("-");
		}
	});
}

export default priceAccordion