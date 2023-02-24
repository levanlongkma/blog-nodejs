const Course = require('./../models/Course');
class NewsController {
    index(req, res, next) {
        Course.find({}).lean()
            .then(courses => {
                res.render('news/index', {courses});
            })
            .catch(error => next(error));
    }

    detail(req, res) {
        res.render('news/detail');
    }
}

module.exports = new NewsController;