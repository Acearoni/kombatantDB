const mongoose = require('mongoose');

const KombatantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must enter Kombatant's name."],
        minLength: [3, "Kombatant's Name must be more 3 kharacters long."]
    },
    realm: {
        type: String,
        required: [true, "Kombatant's Realm must be listed."],
        minLength: [4, "The Realm listed must be 4 kharacters long."]
    },
    numberOfVictims: {
        type: Number,
        required: [true, "You must list the souls lost to this victim."],
        min: [0, "No acts of valor can reclaim a lost soul. If none, Kongrats!"]
    },
    isAlive: {
        type: Boolean,
        required: [true, "Please inform the Elder Gods on their status."]
    }

}, {timestamps: true})

const Kombatant = mongoose.model('Kombatant', KombatantSchema)
module.exports = Kombatant
