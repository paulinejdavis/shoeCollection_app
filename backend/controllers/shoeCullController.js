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
        .catch((err) => console.log(err))
}

module.exports.deleteShoeCull = (req, res) => {
    const { _id } = req.body;
    console.log('id ---> ', _id)

    shoeCullModel
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("Deleted successfully"))
        .catch((err) => console.log(err))
}

module.exports.updateShoeCull = (req, res) => {
    const { _id, text } = req.body;
    shoeCullModel
        .findByIdAndUpdate( _id, {text} )
        .then(() => res.set(201).send("Shoe cull updated successfully"))
        .catch((err) => console.log(err))
}


