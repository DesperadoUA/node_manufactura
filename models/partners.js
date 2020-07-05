const mysql = require('mysql2/promise')
const config = require('../config')

class Model {
	static async getLastPosts(number) {
		const conn = await mysql.createConnection(config)
		const postType = 'partners'
		const [rows] = await conn.execute(`SELECT json_content FROM posts 
		WHERE post_type = '${postType}' ORDER BY data_published DESC LIMIT `+number)
		conn.end()
		return rows
	}
}
module.exports = Model
