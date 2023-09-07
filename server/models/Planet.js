import { Schema } from "mongoose";

export const PlanetSchema = new Schema(
    {
        name: { type: String, required: true, minlength: 3, maxlength: 55 },
    }
)
