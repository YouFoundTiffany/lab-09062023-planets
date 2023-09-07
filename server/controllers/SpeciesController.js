import BaseController from "../utils/BaseController.js";


export class SpeciesController extends BaseController {
    constructor() {
        super('api/species')
        this.router
            .get('', this.getSpecies)
    }
    getSpecies(request, response, next) {
        response.send('SPECIES API is working')//first step to verify connection


    }


}