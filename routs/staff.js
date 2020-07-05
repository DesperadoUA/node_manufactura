const {Router} = require('express')
const router = Router()
const StaffModel = require('../models/staff')
const globalFunctions = require('../utils/functions')

router.get('/', async (req, res) => {

	let posts = await StaffModel.getPostsCategory(0)
	posts = globalFunctions.addSlug(posts)
	posts = globalFunctions.parseJsonContent(posts)
	const data_post = {
		title: "Title category",
		h1: "Врачи",
		description: "Description Врачи category",
		posts
	}
	res.render('staff_category', data_post)
})
router.get('/:url', async (req, res) => {
	const result = await StaffModel.getDateByUrl(req.params.url)
	const {thumbnail} = result[0]
	const json_content = JSON.parse(result[0].json_content)
	const {h1, content, desc_doc, exp_doc} = json_content
	const data_post = {
		title: "Title index staff",
		content,
		h1,
		desc_doc,
		exp_doc,
		thumbnail
	}
	res.render('staff_index', data_post)
})
router.get('/page/:id', async (req, res) => {
	const pagePagination = req.params.id - 1
	let posts = await StaffModel.getPostsCategory(pagePagination)
	posts = globalFunctions.addSlug(posts)
	posts = globalFunctions.parseJsonContent(posts)
	const data_post = {
		title: "Title category",
		h1: "Врачи",
		description: "Description Staff category",
		posts
	}
	res.render('staff_category', data_post)
})

module.exports = router