const helloWorld = (req, res, next) => {
    res.json('Hello Worls');
};

module.exports = { helloWorld}