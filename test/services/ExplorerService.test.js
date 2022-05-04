const ExplorerService = require('./../../lib/services/ExplorerService')
const Reader = require('./../../lib/utils/Reader')
const explorers = Reader.readJsonFile('explorers.json')

describe('Prueba unitaria para ExplorerService', () => {
    test('1) Imprime la cantidad de explorers que su mission es node', () => {
        const explorersInNode = ExplorerService.filterByMission(explorers, 'node')

        expect(explorersInNode).not.toBeUndefined()
    })

    test('2) Cantidad de explorers por mision', () => {
        const explorersAmmoutInNode = ExplorerService.getAmountOfExplorersByMission(explorers, 'node')

        expect(explorersAmmoutInNode).toBe(10)
    })

    test('3) Usuarios que su mision sea node', () => {
        const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers, 'node')

        expect(usernamesInNode).toContain('ajolonauta1')
        expect(usernamesInNode).toContain('ajolonauta2')
        expect(usernamesInNode).toContain('ajolonauta3')
        expect(usernamesInNode).toContain('ajolonauta4')
        expect(usernamesInNode).toContain('ajolonauta5')
        expect(usernamesInNode).toContain('ajolonauta11')
        expect(usernamesInNode).toContain('ajolonauta12')
        expect(usernamesInNode).toContain('ajolonauta13')
        expect(usernamesInNode).toContain('ajolonauta14')
        expect(usernamesInNode).toContain('ajolonauta15')
    })
})