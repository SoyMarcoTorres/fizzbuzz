const { TestScheduler } = require('jest');
const ExplorerService = require('../../lib/services/ExplorerService');
const ExplorerController = require('./../../lib/controllers/ExplorerController')

describe("Prueba unitaria de ExplorerController", () =>{
    test('Regresa los explorer de una mission', () => {
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        
        expect(explorersInNode).not.toBeUndefined();
    })

    test('2) Usuarios que su mision es node', () => {
        const usernameInNode = ExplorerController.getExplorersUsernamesByMission('node')

        expect(usernameInNode).toContain('ajolonauta1')
        expect(usernameInNode).toContain('ajolonauta2')
        expect(usernameInNode).toContain('ajolonauta3')
        expect(usernameInNode).toContain('ajolonauta4')
        expect(usernameInNode).toContain('ajolonauta5')
        expect(usernameInNode).toContain('ajolonauta11')
        expect(usernameInNode).toContain('ajolonauta12')
        expect(usernameInNode).toContain('ajolonauta13')
        expect(usernameInNode).toContain('ajolonauta14')
        expect(usernameInNode).toContain('ajolonauta15')
    })

    test('3) Cantidad de explorers por mision elegida', () => {
        const explorersAmmoutInNode = ExplorerController.getExplorersAmonutByMission("node");

        expect(explorersAmmoutInNode).toBe(10);
    })

    test('4) Obtiene strick dependiendo del numero prueba getNumberValidation', () => {
        const number = ExplorerController.getNumberValidation(5)

        expect(number).toBe('BUZZ')
    })
})