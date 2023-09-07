import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";


export class GalaxiesController extends BaseController {
    constructor() {
        super('api/galaxies')
        this.router
            .get('', this.getGalaxies)
            .post('', this.createGalaxy)
    }
    // 1️⃣ GET REQUEST

    getGalaxies(request, response, next) {
        response.send('GALAXIES API is working')//first step to verify connection


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

}