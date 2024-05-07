
const Note = require('../models/notes.model');

//get all notes

const getAllNotes = async (req,res)=>{
    try{
      const notes = await Note.find({});
      res.status(200).json(notes);
      console.log('successfully fetched all notes');
    }
    catch(error){
      res.status(500).json({message: error.message})
  
    }
}

// Get one Note

const getNote = async(req, res)=>{

    try{
      const {id} = req.params;
      const note = await Note.findById(id);
      res.status(200).json(note);
      console.log('fetched one note')
    }
  
    catch(error){
      res.status(500).json({ message: error.message })
    }
  };

//add note

const addNote =  async (req, res) => {

    try {
      const note = await Note.create(req.body);
      res.status(200).json(note)
      console.log("data added successfully");
  
    }
    catch (error) {
  
      res.status(500).json({ message: error.message })
  
    }
  };


  // Update Note

const updateNote = async(req,res)=>{
    try{
      const {id}= req.params;
      const note = await Note.findByIdAndUpdate(id, req.body);
      if(!note){
        return res.status(404).json({message: 'Note not found'});
    
      }
      const updatedNote = await Note.findById(id);
      res.status(200).json(updatedNote);
      console.log('updated successfully');
    }
    catch(error){
      res.status(500).json({message:error.message});
    }
  
  };

  //Delete a note

const deleteNote  = async(req,res)=>{
    try{
      const {id} = req.params;
      const note = await Note.findByIdAndDelete(id);
      if(!note){
        return res.status(404).json({message:'Note to be deleted does not exist'});
      } 
      res.status(200).json({message:'Successfully deleted'});
  
    }
    catch(error){
      res.status(500).json({message:error.message});
    }
  };

module.exports= {
    getAllNotes,
    getNote,
    addNote,
    updateNote,
    deleteNote
};