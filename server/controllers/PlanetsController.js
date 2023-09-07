import BaseController from "../utils/BaseController.js";


export class PlanetsController extends BaseController {
    constructor() {
        super('api/planets')
        this.router
            .get('', this.getPlanets)
    }
    getPlanets(request, response, next) {
    response.send('PLANETS API is working')//first step to verify connection


    }


}