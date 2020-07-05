module.exports = {
	contentSection(content){
		const before = '<div class="container text_section">'
		const after = '</div>'
		return before+content+after
	},
	qaRows(posts){
		const before = '<div class="container text_section"><div class="row_category_qa">'
		const after = '</div></div>'
		posts = posts.map((post)=>{
			const str =`<div class='container_qa'>
				<div class='asc'>
				   <div class='asc_wrapper'>
				     <img src='/img/queshen.jpg'>
				     <p class='name'>${post.name}</p>
				   </div>
				<div class='text_asc'>${post.asc}
				   </div>
				 </div>
				 <div class='ansver'>
				    <div class='ansver_wrapper'>
				      <div class='ansver_logo'>
				      <img src='/img/log-circle.jpg'></div>
				        <div class='ansver_text'>
				          ${post.answer}
				        </div>
				      </div>
				    </div>
				 </div>`
			return str
		})
		return before+posts.join('')+after
	},
	priceAccordion(accordions, title){
		if(accordions.length !== 0) {
			let before = '<section class="price_accordions"><div class="container">'
			if(title !== '') before += `<p class="price_title">${title}</p>`;
			const after = '</div></section>'
			let str = ''
			accordions.forEach( item => {
				str += `<div class="price_accordeon">
                       <div class="price_cross">+</div>
                       <div class="accordeon_title">${item.accordionTitle}</div>
                   </div>`

				str += `<div class="price_wrapper"><div class="price_box">`
				str += `<div class="price_row">
                      <div class="price_row_title">Послуга</div>
                      <div class="price_number">Ціна</div>
                    </div>`
				item.accordionChildren.forEach(children => {
					str += `<div class="price_row">
                          <div class="price_row_title">${children.accordionTitle}</div>
                          <div class="price_number">${children.price}</div>
                        </div>`
				})
				str +=  `</div></div>`
			})
			return before+str+after
		}
		else return ''
	},
	partnersRow(partners){
		if(partners.length !== 0) {
			const before = '<section class="partners">'
			const after = '</section>'
			let str = ''
			partners.forEach(item => {
				str += `<div class="partners_row">
							<div class="partners_part_left">
								<img src="${item.img}"></div>
							<div class="partners_part_right">
							   <p class="partners_title">${item.title}</p>
							   <div class="partners_city">
								 <p>${item.title_desc}</p>
							   </div>
							<p>${item.desc}</p>
							</div>
		                </div>`
			})
			return before+str+after
		}
		else return ''
	},
	categoryBlogRow(posts){
		if(posts.length !== 0) {
			const before = `<section class="category_blog_wrapper">
                            <div class="container">
							<div class="row category_blog_row">`
			const after = '</div></div></section>'

			let str = ''
			posts.forEach(item => {
				str += `<div class="category_blog_item">
						 <div class="litle_card_wrapper">
						    <div class="litle_card">
								<div class="litle_card_left">
									<img src="${item.thumbnail}">
									<img src="/img/edge.png" class="card_edge">
								</div>
								<div class="litle_card_right">
									<div class="litle_card_right_wrapper">
									<p class="litle_card_text_first color_red">${item.data_published}</p>
									<p class="litle_card_text_second color_blue">${item.post_title}</p>
									<div><p>${item.desc_post}</p></div>
									<p class="litle_card_read_more"><a href="${item.permalink}">Подробнее</a></p>
								</div>
								</div>
							</div>
						 </div>
						</div>`
			})
			return before+str+after
		}
		else return ''
	},
	simpleContent(content){
		return content;
	},
	jobRow(posts){
		if(posts.length !== 0) {
			const before = `<section class="category_job">
                            <div class="container">
							<div class="row category_job_row">`
			const after = '</div></div></section>'

			let str = ''
			posts.forEach(item => {
				str += `<div class="job_item">
                                <div class="job_section_1">
                                    <div class="job_section_name">
                                        <p class="job_date">${item.data_published}</p>
                                        <p class="job_name">${item.post_title}</p>
                                    </div>
                                </div>
                                <div class="job_section_2">
                                    <p>${item.text}</p>
                                    <p class="job_link"><span class="popup_activ_4">
                                    Відправити резюме</span></p>
                                </div>
                        </div>`
			})
			return before+str+after
		}
		else return ''
	},
	listServices(posts){
		if(posts.length !== 0) {
			const before = `<section class="list_services">
								<div class="container">
									<div class="list_services_row">`
			const after = '</div></div></section>'

			let str = ''
			posts.forEach(item => {
				str += `<div class="service_item">
                          	<div class="service_item_img">
                          		<img src="/img/triangle-red.png">
                         	</div>
                         	<div class="service_item_link js-servic-hover">
                         		<a href="${item.permalink}">${item.post_title}</a>
                         	</div>
                         </div>`
			})
			return before+str+after
		}
		else return ''
	},
	sharesSlider(posts){
		if(posts.length !== 0) {
			const before = `<section class="shares_slider">
								<div class="container">
									<div class="row">
										<div class="col-lg-12 shares_slider_container">
											<div class="slider_shares_left">
												<img src="/img/Left.svg" class="shares_slider_arrow_left">
											</div>
											<div class="slider_shares_right">
												<img src="/img/Right.svg" class="shares_slider_arrow_right">
										</div>
								<div class="shares_slider_box">
								<div class="shares_slider_wrapper">`
			const after = `</div></div></div></div>
								</div>
							</section>`

			let str = ''
			posts.forEach(item => {
				str += `<div class="shares_slider_item">
							<a href="${item.permalink}">
								<img src="${item.img}">
							</a>
						</div>`
			})
			return before+str+after
		}
		else return ''
	},
	staffSlider(posts){
		if(posts.length !== 0) {
			const before = `<section class="slider_doc">
								<div class="slider_doc_title"><p>Наші фахівці</p></div>
								<div class="slider_doc_wrapper">
									<div class="slider_doc_left" >
									  <img src="/img/Left.svg" class="doc_slider_arrow_left">
									</div>
									<div class="slider_doc_right" >
									  <img src="/img/Right.svg" class="doc_slider_arrow_right">
									</div>
									<div class="slider_doc_center">
            					<div class="slider_doc_box">`
			const after = ` </div></div></div></section>`
			let str = ''
			posts.forEach(item => {
				str += `<div class="slider_doc_item">
							<div class="slider_doc_item_img">
								<a href="${item.permalink}">
									<img src="${item.thumbnail}"></a>
								<img src="/img/bottom2.png" class="slider_doc_bottom">
							</div>
							<div class="slider_doc_item_name">
								<p><a href="${item.permalink}">${item.post_title}</a></p>
							</div>
							<div class="slider_doc_item_proff">
								${item.desc_doc}
							</div>
							<div class="slider_doc_item_experience">
								<span>${item.exp_doc}</span>
							</div>
							<a href="${item.permalink}">
							  <button class="button_style_program_blue">Детальніше</button>
							</a>
						</div>`
			})
			return before+str+after
		}
		else return ''
	},
	jobSlider(posts){
		if(posts.length !== 0) {
			const before = `<section class="vacancy">
								<div class="container">
									<div class="row">
											<p class="title_vacancy">Робота у нас / Вакансії</p>
										<div class="vacancy_container">
											<div class="slider_vacancy_left">
												<img src="/img/Left_Hover.svg" class="vacancy_slider_arrow_left">
											</div>
											<div class="slider_vacancy_right">
												<img src="/img/Right_Hover.svg" class="vacancy_slider_arrow_right">
											</div>
											<div class="vacancy_wrapper">
								<div class="vacancy_box">`
			const after = `</div></div></div></div></div></section>`
			let str = ''
			posts.forEach(item => {
				str += `<div class="vacancy_item">
                            <img src="${item.thumbnail}">
                            <p class="vacancy_item_title">${item.post_title}</p>
                            <p class="vacancy_item_desc">${item.text}</p>
                            <button class="popup_activ_4 vacancy_button"><span>Відправити резюме</span></button>
                        </div>`
			})
			return before+str+after
		}
		else return ''
	},
	cardNewsMainPage(posts){
		if(posts.length !== 0) {
			let str = ''
			posts.forEach(item => {
				str += `<div class="litle_card position_bottom fade_up" data-animate="fade_up">
                    <div class="litle_card_left">
                        <img src="${item.thumbnail}">
                        <img src="/img/edge.png" class="card_edge">
                    </div>
                    <div class="litle_card_right">
                        <div class="litle_card_right_wrapper">
                            <p class="litle_card_text_first color_red">${item.data_published}</p>
                            <p class="litle_card_text_second color_blue">${item.post_title}</p>
                            <div><p>${item.desc_post}</p></div>
                            <p class="litle_card_read_more"><a href="${item.permalink}">Детальніше</a></p>
                        </div>
                    </div>
                </div>`
			})
			return str
		}
		else return ''
	},
	plusesSection(posts){
		if(posts.length !== 0) {
			const before = `<section class="pluses">
								<div class="container">
								<div class="row">
							<div class="col-lg-12 wrap_plus">`
			const after = `</div></div></div></section>`
			let str = ''
			posts.forEach(item => {
				str += `<div class="plus_item">
							<div class="plus_box">
							<img src="${item.img}">
							<p class="plus_title">${item.text_1}</p>
							<p class="plus_box_time_work">${item.text_2}</p>
						</div></div>`
			})
			return before+str+after
		}
		else return ''
	},
	reviewsSection(posts){
		if(posts.length !== 0) {
			const before = `<section class="reviews reviews_slider fade_out fade_in" data-animate="fade_in">
								<div class="container">
									<div class="row">
										<p class="reviews_title">Відгуки про нас</p>
									<div class="wrapper_reviews">
									<div class="slider_review_left"><img src="/img/Left.svg" class="doc_slider_arrow_left"></div>
									<div class="slider_review_right"><img src="/img/Right.svg" class="doc_slider_arrow_right"></div>
									<div class="box_reviews">
									<div class="container_review">`
			const after = `</div></div></div>
								<p class="all_link"><a href="/feedback/" class="background_white">всі відгуки</a></p>
							</div></div>
						 </section>`
			let str = ''
			posts.forEach(item => {
				str += `<div class="item_review">
							<div class="item_review_text text-center">
							<p>${item.text}</p>
						</div>
						<p class="item_review_name">${item.name}</p>
						</div>`
			})
			return before+str+after
		}
		else return ''
	},
	categoryStaff(posts){
		if(posts.length !== 0) {
			const before = `<section class="category_staff">
								<div class="container">
									<div class="row category_doc_wrapper">`
			const after = ` </div>
								</div>
							</section>`
			let str = ''
			posts.forEach(item => {
				str += `<div class="category_doc_item">
							<div class="slider_doc_item">
								<div class="slider_doc_item_img">
									<a href="${item.permalink}">
										<img src="${item.thumbnail}"></a>
									<img src="/img/bottom2.png" class="slider_doc_bottom">
								</div>
								<div class="slider_doc_info_wrapper">
									<div class="slider_doc_item_name">
										<p><a href="${item.permalink}">${item.post_title}</a></p>
									</div>
									<div class="slider_doc_item_proff">
										${item.desc_doc}
									</div>
									<div class="slider_doc_item_experience">
										<span>${item.exp_doc}</span>
									</div>
									<a href="${item.permalink}"><button class="button_style_program_blue">Подробнее</button></a>
								</div>
							</div>
						</div>`
			})
			return before+str+after
		}
		else return ''
	},
	categoryProgramsRow(posts){
		if(posts.length !== 0) {
			const before = `<div class="category_program_wrapper">
    						<div class="program_wrapper">`
			const after = '</div></div>'

			let str = ''
			posts.forEach(item => {
				str += `<div class="card_wrapper">
							<div class="big_card">
								<div class="big_card_left">
									<img src="${item.thumbnail}">
									<img src="/img/edge.png" class="card_edge">
								</div>
								<div class="big_card_right">
									<div class="big_card_right_wrapper">
										<p class="program_text_second color_blue">${item.post_title}</p>
										<a href="${item.permalink}">
										<button class="button_style_program_blue">Детальніше</button></a>
									</div>
								</div>
							</div>
						</div>`
			})
			return before+str+after
		}
		else return ''
	},
	packagesPrograms(posts){
			if(posts.length !== 0) {
				const before = `<section class="packages_programs">
									<div class="container">
										<div class="packages_programs_row">`
				const after = `</div></div></section>`

				let str = ''
				posts.forEach(item => {
					str += `<div class="program_item_wrapper">
								<div class="program_item">
									<div class="program_item_title">${item.title}</div>
									<div class="text_section program_item_desc">${item.content}</div>
									<div class="program_item_price">${item.price}</div>
									<div class="program_item_last">${item.desc}</div>
								</div>
							</div>`
				})
				return before+str+after
			}
			else return ''
	}
}