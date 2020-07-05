const mysql = require('mysql2/promise')
const config = require('../config')

class Model {
	static async getPostsAdultsCategory(number) {
		const conn = await mysql.createConnection(config)
		const numberPostsInCategory = 4
		const postType = 'programs_adults'
		const offset = numberPostsInCategory*number
		let query = ''
		if(offset === 0){
			query = `SELECT post_title, thumbnail, slug, permalink FROM posts 
		WHERE post_type = '${postType}' ORDER BY data_published DESC LIMIT ` + numberPostsInCategory
		}
		else {
			query = `SELECT post_title, thumbnail, slug, permalink FROM posts 
		WHERE post_type = '${postType}' ORDER BY data_published DESC LIMIT `+numberPostsInCategory+` OFFSET `+offset
		}
		const [rows] = await conn.execute(query)
		conn.end()
		return rows
	}
	static async getPostsChildrenCategory(number) {
		const conn = await mysql.createConnection(config)
		const numberPostsInCategory = 4
		const postType = 'programs_children'
		const offset = numberPostsInCategory*number
		let query = ''
		if(offset === 0){
			query = `SELECT post_title, thumbnail, slug, permalink FROM posts 
		WHERE post_type = '${postType}' ORDER BY data_published DESC LIMIT ` + numberPostsInCategory
		}
		else {
			query = `SELECT post_title, thumbnail, slug, permalink FROM posts 
		WHERE post_type = '${postType}' ORDER BY data_published DESC LIMIT `+numberPostsInCategory+` OFFSET `+offset
		}
		const [rows] = await conn.execute(query)
		conn.end()
		return rows
	}
	static async getDateByUrl(url) {
		const conn = await mysql.createConnection(config)
		const [rows] = await conn.execute("SELECT * FROM posts WHERE permalink = '"+url+"'")
		conn.end()
		return rows
	}
	static async getLastAdultPosts(number) {
		const conn = await mysql.createConnection(config)
		const postType = 'programs_adults'
		const [rows] = await conn.execute(`SELECT post_title, slug, permalink, thumbnail, desc_post, data_published FROM posts 
		WHERE post_type = '${postType}' ORDER BY data_published DESC LIMIT `+number)
		conn.end()
		return rows
	}
	static async getLastChildrenPosts(number) {
		const conn = await mysql.createConnection(config)
		const postType = 'programs_children'
		const [rows] = await conn.execute(`SELECT post_title, slug, permalink, thumbnail, desc_post, data_published FROM posts 
		WHERE post_type = '${postType}' ORDER BY data_published DESC LIMIT `+number)
		conn.end()
		return rows
	}
}
module.exports = Model
