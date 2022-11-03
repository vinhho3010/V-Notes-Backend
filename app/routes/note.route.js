const express = require("express");
const notes = require("../controllers/note.controller");

const router = express.Router();

router.route("/")
    .get(notes.findAll)
    .post(notes.create)
    .delete(notes.deleteAll);

router.route("/:id")
    .post(notes.update)
    .delete(notes.delete);


     
module.exports = router