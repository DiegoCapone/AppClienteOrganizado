const moment = require('moment')

module.exports = app => {
    const getCliente = (req, res) => {
        app.db('cliente')
            .where({ userId: req.user.id })
            .then(cliente => res.json(cliente))
            .catch(err => res.status(400).json(err))
    }

    const cadastrar = (req, res) => {
        if (!req.body.nome.trim()) {
            return res.status(400).send('Descrição é um campo obrigatório')
        }

        req.body.userId = req.user.id

        app.db('cliente')
            .insert(req.body)
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    const remove = (req, res) => {
        app.db('cliente')
            .where({ id: req.params.id, userId: req.user.id })
            .del()
            .then(rowsDeleted => {
                if (rowsDeleted > 0) {
                    res.status(204).send()
                } else {
                    const msg = `Não foi encontrada task com id ${req.params.id}.`
                    res.status(400).send(msg)
                }
            })
            .catch(err => res.status(400).json(err))
    }

    const update = (req, res) => {
        app.db('cliente')
            .where({ id: req.params.id, userId: req.user.id })
            .update(req.body)
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    
    return { getCliente, cadastrar, remove, update }
}