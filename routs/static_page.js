const {Router} = require('express')
const router = Router()
const StaticPageModel = require('../models/static_page')
const PartnersModel = require('../models/partners')
const StaffModel = require('../models/staff')
const ReviewsModel = require('../models/reviews')
const JobModel = require('../models/job')
const NewsModel = require('../models/news')
const BlogModel = require('../models/blog')
const ProgramsModel = require('../models/programs')
const globalFunctions = require('../utils/functions')

router.get('/', async (req, res) => {
	const result = await StaticPageModel.getDateByUrl('/')
	const support = globalFunctions.parseJsonContent(result)

	let staffSupport = await StaffModel.getAllPosts()
	staffSupport = globalFunctions.addSlug(staffSupport)
	staffSupport = globalFunctions.parseJsonContent(staffSupport)

	let newsSupport = await NewsModel.getLastPosts(2)
	newsSupport = globalFunctions.addSlug(newsSupport)

	let blogSupport = await BlogModel.getLastPosts(2)
	blogSupport = globalFunctions.addSlug(blogSupport)

	support[0].staff = staffSupport
	support[0].news = newsSupport
	support[0].blog = blogSupport

	const data = support[0]
	res.render('index', data)
})

router.get('/about', async (req, res) => {
	const result = await StaticPageModel.getDateByUrl('about')
	const support = globalFunctions.parseJsonContent(result)

	let staffSupport = await StaffModel.getAllPosts()
	staffSupport = globalFunctions.addSlug(staffSupport)
	staffSupport = globalFunctions.parseJsonContent(staffSupport)

	let reviewsSupport = await ReviewsModel.getAllPosts()
	reviewsSupport = globalFunctions.addSlug(reviewsSupport)
	reviewsSupport = globalFunctions.parseJsonContent(reviewsSupport)

	let jobSupport = await JobModel.getAllPosts()
	jobSupport = globalFunctions.addSlug(jobSupport)
	jobSupport = globalFunctions.parseJsonContent(jobSupport)

	support[0].staff = staffSupport
	support[0].reviews = reviewsSupport
	support[0].job = jobSupport

	const data = support[0]
	res.render('about', data)
})

router.get('/price-list', async (req, res) => {
	const result = await StaticPageModel.getDateByUrl('price-list')
	const support = globalFunctions.parseJsonContent(result)
	const {h1, accordions} = support[0]
	const data = {
		h1,
		accordions
	}
	res.render('price', data)
})

router.get('/partners', async (req, res) => {
	const result = await StaticPageModel.getDateByUrl('partners')
	const support = globalFunctions.parseJsonContent(result)
	let partners = await PartnersModel.getLastPosts(2)
	partners = globalFunctions.parseJsonContent(partners)
	support[0].partners = partners
	const data = support[0];
	res.render('partners', data)
})

router.get('/contacts', async (req, res) => {
	const result = await StaticPageModel.getDateByUrl('contacts')
	const support = globalFunctions.parseJsonContent(result)
	const {h1, content, text_left, text_right, img, map, title, description, keywords} = support[0]
	const data = {
		title,
		description,
		keywords,
		h1,
		content,
		text_left,
		text_right,
		img,
		map
	}
	res.render('contacts', data)
})

router.get('/programs-adults', async (req, res) => {
	const result = await ProgramsModel.getPostsAdultsCategory(0)
	const posts = globalFunctions.addSlug(result)
	const data = {
		h1: "Программы для взрослых",
		posts
	}
	res.render('programs_category', data)
})

router.get('/programs-adults/page/:id', async (req, res) => {
	const pagePagination = req.params.id - 1
	const result = await ProgramsModel.getPostsAdultsCategory(pagePagination)
	const posts = globalFunctions.addSlug(result)
	const data = {
		h1: "Программы для взрослых",
		posts
	}
	res.render('programs_category', data)
})

router.get('/programs-children', async (req, res) => {
	const result = await ProgramsModel.getPostsChildrenCategory(0)
	const posts = globalFunctions.addSlug(result)
	const data = {
		h1: "Программы для Детей",
		posts
	}
	res.render('programs_category', data)
})

router.get('/programs-children/page/:id', async (req, res) => {
	const pagePagination = req.params.id - 1
	const result = await ProgramsModel.getPostsChildrenCategory(pagePagination)
	const posts = globalFunctions.addSlug(result)
	const data = {
		h1: "Программы для детей",
		posts
	}
	res.render('programs_category', data)
})

router.get('/job', async (req, res) => {
	const result = await JobModel.getAllPosts()
	const posts = globalFunctions.parseJsonContent(result)
	const data = {
		h1: "Вакансии",
		posts
	}
	res.render('job', data)
})

module.exports = router