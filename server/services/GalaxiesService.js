import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";
import { logger } from "../utils/Logger.js";

// NOTE THIS IS OUR TOP SCHEMA ITEM
class GalaxiesService {
    // 1️⃣ GET
    async getGalaxies(query) {
        // this FIND is the Mongoose FIND .........⬇️
        const galaxies = await dbContext.Galaxies.find(query)
        return galaxies
    }
    // 2️⃣ CREATE
    async createGalaxy(body) {
        const newGalaxy = await dbContext.Galaxies.create(body)
        return newGalaxy
    }

    // 3️⃣ EDIT
    async editGalaxy(galaxyId, updates) {
        const originalGalaxy = await dbContext.Galaxies.findById(galaxyId)
        if (!originalGalaxy) throw new Error('unable to find galaxy at ${galaxyId}')
        // need to list out all the values that could be changed on this object
        originalGalaxy.name = updates.name || originalGalaxy.name
        originalGalaxy.stars = updates.stars != undefined ? updates.stars : originalGalaxy
        // FIXME how do I update a number?
    }

    // 4️⃣ DELETE
    // async removeGalaxy(galaxyId) {
    //     const galaxyToRemove = await dbContext.Galaxies.findById(galaxyId)
    //     if (!galaxyToRemove) {
    //         throw new BadRequest("No Galaxy at id:+" galaxyId)
    //     }
    //     await galaxyToRemove.remove()
    //     return `remove the ${galaxyToRemove.name}, successful.`

    // }
    // 5️⃣ GET DEPENDANT ITEM

}

export const galaxiesService = new GalaxiesService()



