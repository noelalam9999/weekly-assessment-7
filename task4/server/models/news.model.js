const {
    default: mongoose
} = require("mongoose");
const {
    v4: uuidv4
} = require("uuid");
// const { default: Comment } = require("./comment.model");



const newsSchema = mongoose.Schema({
    id: {
        type: String,
        default: Date.now
    },
    title: {
        type: String,
        require: true
    },
    details: {
        type: String,
        require: true
    },
    comments: [{
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
    }],
    createdOn: {
        type: Date,
        default: Date.now
    }
})

const News = mongoose.model('News', newsSchema);

const create = async (data) => {
    try {
        data.id = uuidv4();
        const news = new News(data);
        await news.save();
        return news;
    } catch (error) {
        console.log(error);
    }
}

const getAll = async () => {
    try {
        const news = await News.find();
        return news
    } catch (error) {
        console.log(error)
    }
};

const getOne = async (paramsId) => {
    try {
        const news = await News.findOne({
            id: paramsId,
        });
        return news;
    } catch (error) {
        console.log(error)
    }
};

const updateOne = async (id,comment) => {
    try {
        const news = getOne(id)
        news.comments.push({id:uuidv4(),comment})
        news.save()
        return news;
    } catch (error) {
        console.log(error)
    }
};

const deleteOne = async (paramsId) => {
    try {
        await News.deleteOne({
            id: paramsId
        });
        return 1;
    } catch (error) {
        console.log(error)
    }
};

module.exports = {
    create,
    getAll,
    getOne,
    updateOne,
    deleteOne,
};
