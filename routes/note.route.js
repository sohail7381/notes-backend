const express = require('express');
const Note = require('../models/notes.model');
const router = express.Router();  
const {getAllNotes, getNote, updateNote, deleteNote, addNote,} = require('../controller/note.controller');

router.get('/',getAllNotes);
router.post('/',addNote);
router.get('/:id',getNote);
router.put('/:id',updateNote);
router.delete('/:id',deleteNote);





module.exports = router;