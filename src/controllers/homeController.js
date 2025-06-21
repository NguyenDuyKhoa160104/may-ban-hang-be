const getHomepage = (req, res) => {
    res.send("HelloWord")
}

const getABC = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getABC

}