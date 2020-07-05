function questionFormActivate(){
	const formQuestion = document.querySelector('.question_pop_up')
	if(formQuestion){
		const popupActive = document.querySelector('.popup_activ_2')
		popupActive.addEventListener('click', function(){
			formQuestion.classList.add('show')
		})
	}
}
export default questionFormActivate