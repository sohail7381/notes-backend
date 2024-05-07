const mongoose = require('mongoose');
const NotesSchema = mongoose.Schema(
    {
        
            "title": {
                type : String,
                required: false
            },

            "content":{
                type: String,
                required: [true, "note cannot be empty"]
            }
        },
        {
            timestamps: true
        }
);

const Note = mongoose.model("Note",NotesSchema)
module.exports = Note; 