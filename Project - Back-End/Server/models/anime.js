const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animeSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        summary:{
            type: String,
            required: true
        },
        type:{
            type:String,
            required: true
        },
        picture:{
            type:String,
            required: true
        },
        genre:{
            type:Array,
            required: true
        }
        
    },
    {timestamps: true}
);
module.exports = mongoose.model("Anime", animeSchema);
