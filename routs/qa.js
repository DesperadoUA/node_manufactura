const {Router} = require('express')
const router = Router()
const QaModel = require('../models/qa')
const globalFunctions = require('../utils/functions')

router.get('/', async (req, res) => {
	let posts = await QaModel.getPostsCategory(0)
	posts = globalFunctions.parseJsonContent(posts)
	const data_post = {
		title: "Title category",
		h1: "Вопрос ответ",
		description: "Description QA category",
		posts
	}
	res.render('qa_category', data_post)
})
router.get('/page/:id', async (req, res) => {
	const pagePagination = req.params.id - 1
	let posts = await QaModel.getPostsCategory(pagePagination)
	posts = globalFunctions.parseJsonContent(posts)
	const data_post = {
		title: "Title category",
		h1: "Вопрос ответ",
		description: "Description QA category",
		posts
	}
	res.render('qa_category', data_post)
})
module.exports = router