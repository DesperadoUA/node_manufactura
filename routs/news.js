const {Router} = require('express')
const router = Router()
const NewsModel = require('../models/news')
const globalFunctions = require('../utils/functions')

router.get('/', async (req, res) => {
	let posts = await NewsModel.getPostsCategory(0)
	posts = globalFunctions.addSlug(posts)
	const data_post = {
		title: "Title category",
		h1: "Новости",
		description: "Description News category",
		posts
	}
	res.render('shares_category', data_post)
})

router.get('/page/:id', async (req, res) => {
	const pagePagination = req.params.id - 1
	let posts = await NewsModel.getPostsCategory(pagePagination)
	posts = globalFunctions.addSlug(posts)
	const data_post = {
		title: "Title category",
		description: "Description News category",
		h1: "Блог",
		posts
	}
	res.render('shares_category', data_post)
})

router.get('/:url', async (req, res) => {
	const result = await NewsModel.getDateByUrl(req.params.url)
	const jsonContent = JSON.parse(result[0].json_content)
	let posts = await NewsModel.getLastPosts(2)
	posts = globalFunctions.addSlug(posts)
	const dataTime = new Date(posts[0].data_published);
	const data_post = {
		title: result[0].title,
		description: result[0].description,
		content: jsonContent.content,
		h1: jsonContent.h1,
		posts,
		thumbnail: result[0].thumbnail
	}
	res.render('blog_index', data_post)
})

module.exports = router