const Course = require('../models/Course')

class NewsController {

    // [GET] / news
    index(req, res, next) {
        Course.find({})
            .then(courses => res.json(courses))
            .catch(next)
    }
    // [GET] / news/:slug
    show(req, res, next) {
        res.send('show')
    }
}

module.exports = new NewsController