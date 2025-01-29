const KombatantController = require('../controllers/kombatant.controller')

module.exports = (app) => {
    app.get('/api/allKombatants', KombatantController.findAllKombatants)
    app.post('/api/createKombatant', KombatantController.createKombatant)
    app.get('/api/findOneKombatant/:id', KombatantController.findOneKombatant)
    app.put('/api/updateKombatant/:id', KombatantController.updateKombatant)
    app.delete('/api/deleteKombatant/:id', KombatantController.deleteKombatant)
    
}