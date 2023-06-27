// We write schemas to restrict what we save in DB.
// Write a schema and then create a model based on it.
// A model interacts with the collection in DB.
// We can query the DB easily using these models

import mongoose from "mongoose";
const { Schema } = mongoose; // mongoose.schema got destructed to this

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 64,
    },
    address: {
        type: String,
        trim: true,
    },
    role: {
        type: Number,
        default: 0,
    },
},
{timestamps: true}
);

export default mongoose.model("User", userSchema);
// mongoose.model() function - create a model(turn the schema into a model)
// argument1: name of this schema, argument2: schema object
// cf. the collection name: the plural form of the schema name
// "User" -> in the DB, a collection called users will be made
