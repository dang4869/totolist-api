const Items = require('../models/Items')
class ItemsController {

    // [GET] / item
    index(req, res, next) {
        // console.log(req.query)
        if (req.query.keyword) {
            Items.find({
                $or: [
                    { name: { $regex: req.query.keyword, $options: 'i' } }
                ]
            }).sort([[req.query.orderBy, req.query.orderDir]])
                .then(items => res.status(200).json({
                    success: true,
                    data: items
                }))
                .catch(next)
        } else {
            Items.find({}).sort([[req.query.orderBy, req.query.orderDir]])
                .then(items => res.status(200).json({
                    success: true,
                    data: items
                }))
                .catch(next)
        }


    }
    // [GET] / items/:id
    showOne(req, res, next) {
        Items.findOne({ _id: req.params.id })
            .then(item => res.status(200).json({
                success: true,
                data: item
            }))
            .catch(next)
    }
    // [POST] / items/add
    add(req, res, next) {
        let params = []
        params.name = req.body.name
        params.status = req.body.status

        const Item = new Items(params)
        Item.save()

        res.status(201).json({
            success: true,
            message: 'Insert success',
            data: Item
        })
    }
    // [PUT]/items/edit/:id
    edit(req, res, next) {
        Items.updateOne({ _id: req.params.id }, req.body)
            .then(res.status(200).json({
                success: true,
                message: 'Update success'
            }))
            .catch(next)
    }
    // [DELETE]/items/delete/:id
    delete(req, res, next) {
        Items.deleteOne({ _id: req.params.id })
            .then(res.status(200).json({
                success: true,
                message: 'Delete success',
                data: []
            }))
            .catch(next)
    }
    makeId = (number) => {
        let text = ""
        let possible = "ABCDEFGHIJKLMOPQRSTUVWXYZ0123456789"

        for (let i = 0; i < number; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length))

            return text
        }
    }
}

module.exports = new ItemsController

