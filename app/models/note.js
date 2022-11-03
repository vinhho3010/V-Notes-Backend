const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const NoteSchema = new Schema({
    ownerID: {
        type: Schema.Type.ObjectId,
        ref: 'account'
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    isPin: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model("Notes", NoteSchema)