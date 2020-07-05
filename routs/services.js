const {Router} = require('express')
const router = Router()
const ServicesModel = require('../models/services')
const StaffModel = require('../models/staff')
const BlogModel = require('../models/blog')
const globalFunctions = require('../utils/functions')

router.get('/:url', async (req, res) => {
	const result = await ServicesModel.getDateByUrl(req.params.url)
	const jsonContent = JSON.parse(result[0].json_content)

	let staff = await StaffModel.getAllPosts()
	staff = globalFunctions.addSlug(staff)
	staff = globalFunctions.parseJsonContent(staff)

	let posts = await BlogModel.getLastPosts(2)
	posts = globalFunctions.addSlug(posts)

	const {
		title,
		description,
		keywords,
		content,
		h1,
		content_2,
		banner,
		post_desc,
		shares_slider,
		accordions,
		reviews
	} = jsonContent
	const data_post = {
		title,
		description,
		keywords,
		content,
		h1,
		content_2,
		banner,
		post_desc,
		shares_slider,
		staff,
		accordions,
		reviews,
		posts
	}
	res.render('services', data_post)
})

module.exports = router