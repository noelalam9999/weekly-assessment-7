const {
    default: mongoose
} = require("mongoose");


const commentSchema = mongoose.Schema({
    id: {
        type: String,
        default: Date.now
    },
    comment: {
        type: String,
        require: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
})

const Comment =  mongoose.model('Comment', commentSchema);

export default Comment;


