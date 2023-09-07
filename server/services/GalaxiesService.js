import { dbContext } from "../db/DbContext.js";
import { logger } from "../utils/Logger.js";

// NOTE THIS IS OUR TOP SCHEMA ITEM
class GalaxiesService {

    // 1️⃣ GET
    async getGalaxies(query) {
        // this FIND is the Mongood FIND .........⬇️
        const galaxies = await dbContext.Galaxies.find(query)
        return galaxies
    }
    // 2️⃣ CREATE
    async createGalaxy(body) {
        const newGalaxy = await dbContext.Galaxies.create(body)
        return newGalaxy
    }


}

export const galaxiesService = new GalaxiesService()



// 3️⃣ EDIT
