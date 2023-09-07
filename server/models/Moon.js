import { Schema } from "mongoose";

export const MoonSchema = new Schema(
    {
        name: { type: String, required: true, minlength: 3, maxlength: 55 },
    }
)
