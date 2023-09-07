import { Schema } from "mongoose";

export const GalaxySchema = new Schema(
    {
        name: { type: String, required: true, minlength: 3, maxlength: 55 },
        stars: { type: Number, },
        // FIXME  WON'T WORK UNTIL PLANETS ARE POPULATED
        // planetCount: { type: Schema.Types.ObjectId, ref: 'Planet', required: true },
    },
    // { toJSON: { virtuals: true } },

)
// FIXME  TO COMPLETE ONCE PLANETS ARE POPULATED
// AnimalSchema.virtual('exhibit', {
    // localField: 'exhibitId', // property to reference HERE on local shchema
    // ref: 'Exhibit', // the separate colllection we are referencing to grab the document for our populate
    // foreignField: '_id', // property to reference on the separate or 'foreign' schema
    // justOne: true // return the one document where the above fields match on the ref collection
// })

// ANCHOR Sam's virutal story:
// "Hey mongoose, look at my localfield here on my AnimalSchema called exhibitId, and while you're looking at my local exhibitId, can you also go and look at the Exhibits collection in the database. While you're looking at the collection of Exhibits, can you compare the foreignfield _id on the Exhibit schema to my exhibitId from the AnimalSchema, and where those two match, return me with THAT one exhibit."

