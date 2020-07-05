module.exports = {
	addSlug(posts){
	  	const newPosts = posts.map(item =>{
	  		item.permalink = `/${item.slug}/${item.permalink}`
			return item
		})
		return newPosts
	},
	parseJsonContent(posts){
		const newPosts = posts.map(item => {
			const json_content = JSON.parse(item.json_content)
			for (key in json_content) item[key] = json_content[key]
			return item
		})
		return newPosts
	}
}