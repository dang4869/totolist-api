const newsRouter = require('./news')
const itemsRouter = require('./items')

function route(app){
    app.use('/news', newsRouter)
    app.use('/items', itemsRouter)
}

module.exports = route