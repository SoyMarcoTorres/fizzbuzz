const FizzbuzzService = require('./../../lib/services/FizzbuzzService')
const Reader = require('./../../lib/utils/Reader')
const explorers = Reader.readJsonFile('explorers.json')

describe('Prueba unitaria para ExplorerService', () => {
    test('1) Impirme la cantidad de explorers que su mission es node', () => {
        const explorer1 = {name: 'Explorer1', score: 1}
        explorer = FizzbuzzService.applyValidationInExplorer(explorer1)

        expect(explorer.trick).toBe(1)
    })

    test('2) Imprime FIZZ, si el score del explorer es divisible entre 3', () => {
        const explorer3 = {name: 'Explorer3', score: 3}
        explorer = FizzbuzzService.applyValidationInExplorer(explorer3)

        expect(explorer.trick).toBe('FIZZ')
    })

    test('3) Imprime BUZZ, si el score del explorer es divisible entre 5', () => {
        const explorer5 = {name: 'Explorer5', score: 5}
        explorer = FizzbuzzService.applyValidationInExplorer(explorer5)

        expect(explorer.trick).toBe('BUZZ')
    })

    test('4) Imprime FIZZBUZZ, si el score del explorer es divisible entre 3 y 5', () => {
        const explorer15 = {name: 'Explorer15', score: 15}
        explorer = FizzbuzzService.applyValidationInExplorer(explorer15)

        expect(explorer.trick).toBe('fizzbuzz')
    })
})