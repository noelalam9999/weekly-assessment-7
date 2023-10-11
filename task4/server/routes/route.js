const express = require("express");
const news = require("./news.route");


const route = express();

route.use('/api/news', news)

route.get('/', (req, res) => {
    try {
        res.status(202).send("Hit The Home Route 🦾")
    } catch (error) {
        res.status(404).json(error.massage)
    }
})

route.use((req, res, next) => {
    res.status(404).json({
        massage: "Opps, Not A Route! 😭"
    })
})

route.use((err, req, res, next) => {
    res.status(500).json({
        massage: "Server Not Found!"
    })
})

module.exports = route;