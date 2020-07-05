const mysql = require('mysql2/promise')
const config = require('../config')

class Model {
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
		const numberPostsInCategory = 4
		const postType = 'qa'
		const offset = numberPostsInCategory*number
		let query = ''
		if(offset === 0){
			query = `SELECT json_content FROM posts 
		WHERE post_type = '${postType}' ORDER BY data_published DESC LIMIT ` + numberPostsInCategory
		}
		else {
			query = `SELECT json_content FROM posts 
		WHERE post_type = '${postType}' ORDER BY data_published DESC LIMIT `+numberPostsInCategory+` OFFSET `+offset
		}
		const [rows] = await conn.execute(query)
		conn.end()
		return rows
	}
}
module.exports = Model

