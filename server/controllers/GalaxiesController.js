import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";


export class GalaxiesController extends BaseController {
    constructor() {
        super('api/galaxies')
        this.router
            .get('', this.getGalaxies)
            .post('', this.createGalaxy)
            .put('', this.editGalaxy)
            // .delete('/:galaxyId', this.removeGalaxy)
        // get planets on the galaxies
        // .get('', this.getPlanets)
        // enter a .use future goal as this is the wed lab and we learned .use it on thursday's lab
    }


    // 1️⃣ GET REQUEST
    async getGalaxies(request, response, next) {
        // response.send('GALAXIES API is working')//first step to verify connection
        try {
            const query = request.query
            const galaxies = await galaxiesService.getGalaxies(query)
            response.send(galaxies)
        } catch (error) {
            next(error)
        }
    }

    // 2️⃣ CREATE - POST REQUEST
    async createGalaxy(request, response, next) {
        try {
            const body = request.body
            const newGalaxy = await galaxiesService.createGalaxy(body)
            response.send(newGalaxy)
        } catch (error) {
            next(error)
        }
    }

    // 3️⃣ EDIT
    async editGalaxy(request, response, next) {
        try {
            const updates = request.body
            const galaxyId = request.params.galaxyId
            const editedGalaxy = await galaxiesService.editGalaxy(galaxyId, updates)
            response.send(editedGalaxy)
        } catch (error) {
            next(error)
        }
    }

    // 4️⃣ DELETE
    // async removeGalaxy(request, response, next) {
    //     try {
    //         const message = await galaxiesService.removeGalaxy(request.params.galaxyId)
    //         response.send(message)
    //     } catch (error) {
    //         next(error)
    //     }
    // }

    // 5️⃣ GET DEPENDANT ITEM
    // getPlanets(request, response, next) {

    // }

}