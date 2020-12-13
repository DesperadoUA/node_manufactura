const mysql = require('mysql2/promise')
const config = require('../config')

class Model {
	static async getDateByUrl(url) {
		const conn = await mysql.createConnection(config)
		const [rows] = await conn.execute("SELECT * FROM posts WHERE permalink = '"+url+"'")
		conn.end()
		return rows
	}
	static async getLastPosts(number) {
		const conn = await mysql.createConnection(config)
		const postType = 'staff'
		const [rows] = await conn.execute(`SELECT post_title, slug, permalink, thumbnail, data_published FROM posts 
		WHERE post_type = '${postType}' ORDER BY data_published DESC LIMIT `+number)
		conn.end()
		return rows
	}
	static async getPostsCategory(number) {
		const conn = await mysql.createConnection(config)
		const numberPostsInCategory = 8
		const postType = 'staff'
		const offset = numberPostsInCategory*number
		let query = ''
		if(offset === 0){
			query = `SELECT post_title, slug, permalink, thumbnail, json_content FROM posts 
		WHERE post_type = '${postType}' ORDER BY data_published DESC LIMIT ` + numberPostsInCategory
		}
		else {
			query = `SELECT post_title, slug, permalink, thumbnail, json_content FROM posts 
		WHERE post_type = '${postType}' ORDER BY data_published DESC LIMIT `+numberPostsInCategory+` OFFSET `+offset
		}
		const [rows] = await conn.execute(query)
		conn.end()
		return rows
	}
	static async getAllPosts(){
		const conn = await mysql.createConnection(config)
		const postType = 'staff'
		const [rows] = await conn.execute(`SELECT post_title, slug, permalink, thumbnail, data_published, json_content FROM posts 
		WHERE post_type = '${postType}' ORDER BY data_published`)
		conn.end()
		return rows
	}
}
module.exports = Model