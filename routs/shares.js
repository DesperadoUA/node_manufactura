const {Router} = require('express')
const router = Router()
const SharesModel = require('../models/shares')
const globalFunctions = require('../utils/functions')

router.get('/', async (req, res) => {
	let posts = await SharesModel.getPostsCategory(0)
	posts = globalFunctions.addSlug(posts)
	const data_post = {
		title: "Title category",
		h1: "Акции",
		description: "Description Shares category",
		posts
	}
	res.render('shares_category', data_post)
})
router.get('/page/:id', async (req, res) => {
	const pagePagination = req.params.id - 1
	let posts = await SharesModel.getPostsCategory(pagePagination)
	posts = globalFunctions.addSlug(posts)
	const data_post = {
		title: "Title category",
		description: "Description Shares category",
		h1: "Акции",
		posts
	}
	res.render('shares_category', data_post)
})
router.get('/:url', async (req, res) => {
	const result = await SharesModel.getDateByUrl(req.params.url)
	const jsonContent = JSON.parse(result[0].json_content)
	let posts = await SharesModel.getLastPosts(2)
	posts = globalFunctions.addSlug(posts)
	const dataTime = new Date(posts[0].data_published)
	const data_post = {
		title: result[0].title,
		description: result[0].description,
		content: jsonContent.content,
		h1: jsonContent.h1,
		posts,
		banner: jsonContent.banner
	}
	res.render('shares_index', data_post)
})

module.exports = router