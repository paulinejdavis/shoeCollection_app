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

module.exports.updateShoeCull = async (req, res) => {
    const {id, text} = req.body;
    shoeCullModel
        .findByIdAndUpdate(id, [text])
        .then(() => res.set(201).send("Shoe cull updated successfully"))
        .catch((err) => console.log(err))
}

