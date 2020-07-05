const {Router} = require('express')
const router = Router()
const ProgramsModel = require('../models/programs')
const globalFunctions = require('../utils/functions')

router.get('/:url', async (req, res) => {
	const result = await ProgramsModel.getDateByUrl(req.params.url)
	const jsonContent = JSON.parse(result[0].json_content)
	let posts = []
	if(result.programs_adults === 'programs_adults'){
		posts = await ProgramsModel.getLastAdultPosts(2)
	}
	else {
		posts = await ProgramsModel.getLastAdultPosts(2)
	}
	posts = globalFunctions.addSlug(posts)
	const data_post = {
		title: result[0].title,
		description: result[0].description,
		post_desc: result[0].desc_post,
		h1: jsonContent.h1,
		banner: jsonContent.banner,
		posts,
		thumbnail: result[0].thumbnail,
		packages: jsonContent.packages
	}
	res.render('programs_index', data_post)
})

module.exports = router