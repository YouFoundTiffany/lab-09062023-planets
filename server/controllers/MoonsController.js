import BaseController from "../utils/BaseController.js";


export class MoonsController extends BaseController {
    constructor() {
        super('api/moons')
        this.router
            .get('', this.getMoons)
    }
    getMoons(request, response, next) {
        response.send('MOONS API is working')//first step to verify connection


    }


}