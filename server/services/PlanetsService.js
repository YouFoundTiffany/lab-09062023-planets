import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";


class PlanetsService {

    // 1️⃣ GET
    async getPlanets(query) {
        const planets = await dbContext.Planets.find(query)
        return planets
    }
    // 2️⃣ CREATE
    async createPlanet(body) {
        const newPlanet = await dbContext.Planets.create(body)
        return newPlanet
    }
    // 3️⃣ EDIT
    // async editPlanet(planetId, updates) {
    //     const originalPlanet = await dbContext.Planets.findById(planetId)
    //     // FIXME Why string interp not working
    //     if (!originalPlanet) throw new Error('unable to find planet at ${planetId}')
    //     originalPlanet.name = updates.name || originalPlanet.name
    //     originalPlanet.biome = updates.biome != undefined ? updates.biome : originalPlanet.biome
    //     originalPlanet.atmosphere = updates.atmosphere != undefined ? updates.atmosphere : originalPlanet.atmosphere

    // }





    // // 4️⃣ DELETE
    // async removePlanet(planetId) {
    //     const planetToRemove = await dbContext.Planets.findById(planetId)
    //     if (!planetToRemove) {
    //         throw new BadRequest("No Planet at id:+" planetId)
    //     }
    //     await planetToRemove.remove()
    //     return `remove teh ${planetToRemove.name}, successful.`
    // }
    // 5️⃣ GET DEPENDANT ITEM

}


export const planetsService = new PlanetsService()