import { Schema } from "mongoose";

export const ColonySchema = new Schema(
    {
        name: { type: String, required: true, minlength: 3, maxlength: 55 },
    }
)
