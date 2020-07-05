function popupActivate(){
	const popUps = document.querySelectorAll('.popup_active')
	if(popUps.length !== 0){
		popUps.forEach(item => {
			item.addEventListener('click', function () {
				const typePopUp = this.getAttribute('data-type')
				const popUp = document.querySelector('.pop_up_'+typePopUp)
				if(popUp) popUp.classList.add('show')
			})
		})
	}
	const closePopUp = document.querySelectorAll('.close')
	if(closePopUp.length !== 0){
		closePopUp.forEach(item => {
			item.addEventListener('click', function () {
				const typePopUp = this.getAttribute('data-type')
				const popUp = document.querySelector('.pop_up_'+typePopUp)
				if(popUp) popUp.classList.remove('show')
			})
		})
	}
}
export default popupActivate