const Reader = require('./../../lib/utils/Reader')
const ExplorerService = require('./../../lib/services/ExplorerService')
const FizzbuzzService = require('./../../lib/services/FizzbuzzService')

class ExplorerController {

    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile('explorers.json')
        const explorersInNode = ExplorerService.filterByMission(explorers, mission)

        return explorersInNode
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile('explorers.json')
        const usernameInNode = ExplorerService.getExplorersUsernamesByMission(explorers, mission)

        return usernameInNode
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile('explorers.json')
        const explorersAmmoutInNode = ExplorerService.getAmountOfExplorersByMission(explorers, mission)

        return explorersAmmoutInNode
    }


}

module.exports = ExplorerController