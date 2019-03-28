module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)

    app.route('/cliente')
        .all(app.config.passport.authenticate())
        .get(app.api.cliente.getCliente)
        .post(app.api.cliente.cadastrar)

    app.route('/cliente/:id')
        .all(app.config.passport.authenticate())
        .delete(app.api.cliente.remove)
        .put(app.api.cliente.update)
}