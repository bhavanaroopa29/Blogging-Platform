const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const {Schema,model} = mongoose;

const PostSchema = new Schema({
  title:String,
  summary:String,
  content:String,
  cover:String,
  author:{type:Schema.Types.ObjectId, ref:'User'},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  tags: [String],
}, {
  timestamps: true,
});

const PostModel = model('Post', PostSchema);

module.exports = PostModel;