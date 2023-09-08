import { Schema } from "mongoose";
import { GalaxySchema } from "./Galaxy.js";

export const PlanetSchema = new Schema(
    {
        name: { type: String, required: true, minlength: 3, maxlength: 55 },
        biome: { type: String, required: true, minlength: 3, maxlength: 55 },
        atmosphere: { type: Boolean, required: true, default: false },
        galaxyId: { type: Schema.Types.ObjectId, ref: 'Galaxy', required: true },
    }
)
// NOTE Ensure you import the Parent Schema
GalaxySchema.virtual('galaxy', {
    localField: 'galaxyId', // property to reference HERE on local shchema
    ref: 'Galaxy', // the separate colllection we are referencing to grab the document for our populate
    foreignField: '_id', // property to reference on the separate or 'foreign' schema
    justOne: true // return the one document where the above fields match on the ref collection
})
// GALAXY SCHEMA
// Name string
// Biome string
// Atmosphere bool
// galaxyID: objectID
//     ** galaxy virtual


