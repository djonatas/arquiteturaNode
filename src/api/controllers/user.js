class userController {
    connect(req, res) {
        res.status(201).send({
            ok: 'true'
        });
    }
}

module.exports = userController;
