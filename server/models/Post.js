const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
	title: String,
	content: String,
	author: String,
	data: {
		type: Date,
		default: Date.now
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Comment'
		}
	],
	liked_users: [
	   {
		   type: mongoose.Schema.Types.ObjectId,
	       ref: 'Comment'
	  }
	
	],
})

module.exports = mongoose.model('Post', PostSchema)