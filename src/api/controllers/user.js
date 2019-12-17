class UserController {
    connect(req, res) {
        res.status(201).send({
            ok: 'true'
        });
    }
}

module.exports = UserController;
