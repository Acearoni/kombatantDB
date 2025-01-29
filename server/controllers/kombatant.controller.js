const Kombatant = require('../models/kombatant.model')

module.exports = {
    //find ALL or R in CRUD (Read All)
    findAllKombatants: (req, res) => {
        Kombatant.find() //method to find all of something
            //name of our choice
            .then((allKombatants) => {
                //stauts 200 related to successful GET
                res.status(200).json(allKombatants)
            })
            .catch((err) => {
                console.log("something SUPER test wrong ETC.")
                res.status(500).json(err)
            })
    },
    //Create, C in CRUD
    createKombatant: (req, res) => {
        Kombatant.create(req.body) //all form data goes in request body
            //name of our choice
            .then((newKombatant) => {
                //201 is succesful post request
                res.status(201).json(newKombatant)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    //Read One
    findOneKombatant: (req, res) => {
        console.log(req.params);
        Kombatant.findOne({ _id: req.params.id })
            .then((oneKombatant) => {
                res.status(200).json(oneKombatant)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    //Update Kombatant
    updateKombatant: (req, res) => {
        Kombatant.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true, runValidators: true })
            .then((updatedKombatant) => {
                res.json(updatedKombatant)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    //Delete Kombatant
    deleteKombatant: (req,res) => {
        Kombatant.deleteOne({_id: req.params.id})
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}