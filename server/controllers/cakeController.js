const {Base, Extra} = require("../util/models");

module.exports = {
    getOptions: async (req, res) => {
        let bases = await Base.findAll()
        let extras = await Extra.findAll()
        res.status(200).send({bases, extras})
    }
}