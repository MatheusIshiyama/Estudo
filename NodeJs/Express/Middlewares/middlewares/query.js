const params = (req, res, next) => {
    const { test } = req.query;

    if (!test) {
        res.status(400).json({ message: "'test' não informado" });
    }

    next();
};

module.exports = params;
