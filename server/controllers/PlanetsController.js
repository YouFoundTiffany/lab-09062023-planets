import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";


export class PlanetsController extends BaseController {
    constructor() {
        super('api/planets')
        this.router
            .get('', this.getPlanets)
            .post('', this.createPlanets)
            // .put('', this.editPlanet)
            // .delete('/:planetId', this.removePlanet)
    }

    // 1️⃣ GET REQUEST
    async getPlanets(request, response, next) {
        // response.send('PLANETS API is working')//first step to verify connection
        try {
            const query = request.query
            const planets = await planetsService.getPlanets(query)
            response.send(planets)
        } catch (error) {
            next(error)
        }
    }
    // 2️⃣ CREATE - POST REQUEST
    async createPlanets(request, response, next) {
        try {
            const body = request.body
            const newPlanet = await planetsService.createPlanet(body)
            response.send(newPlanet)
        } catch (error) {
            next(error)
        }
    }
    // 3️⃣ EDIT
    // async editPlanet(request, response, next) {
    //     try {
    //         const updates = request.body
    //         const planetId = request.params.planetId
    //         const editedPlanet = await planetsService.editPlanet(planetId, updates)
    //         response.send(editedPlanet)
    //     } catch (error) {
    //         next(error)
    //     }
    }

    // 4️⃣ DELETE
    // async removePlanet(request, response, next) {
    //     try {
    //         const message = await planetsService.removePlanet(request.params.planetId)
    //         response.send(message)
    //     } catch (error) {
    //         next(error)
    //     }
    // }
    // 5️⃣ GET DEPENDANT ITEM
// }

function editPlanet(request, response, next) {
    throw new Error("Function not implemented.");
}
