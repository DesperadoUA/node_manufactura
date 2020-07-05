const mysql = require('mysql2/promise')
const config = require('../config')

class Model {
	static async getAllPosts() {
		const conn = await mysql.createConnection(config)
		const postType = 'review'
		const [rows] = await conn.execute(`SELECT json_content FROM posts 
		WHERE post_type = '${postType}' ORDER BY data_published`)
		conn.end()
		return rows
	}
}
module.exports = Model
