const shoeCullModel = require('../models/shoeCullModel');
// const shoeCull = require('../models/shoeCullModel');

module.exports.getShoeCull = async (req, res) => {
    const shoeCull = await shoeCullModel.find();
    res.send(shoeCull);
}

module.exports.saveShoeCull = async (req, res) => {

    const {text} = req.body;
   
    shoeCullModel
        .create({text})
        .then((data) => {
            console.log("New shoes added to the cull..")
            console.log(data)
            res.send(data);
        })   
    }