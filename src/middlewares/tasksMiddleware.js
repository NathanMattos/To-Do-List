const validateBodyTitle = (req, res, next) => {
    const { body } = req;

    if (body.title == undefined) {
        return res.status(400).json({
            message: 'Field "title" is required!'
        })
    }
    if (body.title == "") {
        return res.status(400).json({
            message: 'Field "title" cannot be empty!'
        })
    }
    next();
}

const validateBodyStatus = (req, res, next) => {
    const { body } = req;

    if (body.status == undefined) {
        return res.status(400).json({
            message: 'Field "status" is required!'
        })
    }
    if (body.status == "") {
        return res.status(400).json({
            message: 'Field "status" cannot be empty!'
        })
    }
    next();
}

module.exports = {
    validateBodyTitle,
    validateBodyStatus
}