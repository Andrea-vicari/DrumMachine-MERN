const Keys = require('../models/KeyModel');
const mongoose = require('mongoose');


// Get ALL Keys:
const viewAllKeys = async (req, res)=> {
    const allKey = await Keys.find({}).sort({createdAt: -1});
    res.status(200).json(allKey)
}

// Get a single Key
const getSingleKey = async (req, res)=> {

        const { id } = req.params;

        /*
        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: "No Key found"})
        }
        */

        const key = await Keys.find({"keyNumber":id});

        if(!key){
          return res.status(400).json({error: "No Key found"})
        }
        res.status(200).json(key);
}

// Create a NEW Key:
const createNewKey = async (req, res)=> {

    try{
        // user_id, keyNumber, trackUrl, mp3Name, bpm, genre
        const {user_id, keyNumber, trackUrl, mp3Name, bpm, genre } = req.body
        const key = await Keys.create({user_id, keyNumber, trackUrl, mp3Name, bpm, genre})
        res.status(200).json(key)
    }

    catch(error){
        res.status(400).json({error: error.message})
    }

}

// Delete a single key
const deleteKey = async (req, res)=> {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No Key found"})
    }

    const key = await Keys.findOneAndDelete({_id: id})

    if(!key){
        return res.status(400).json({error: "No Key found"})
      }
      res.status(200).json(key);
}

// Update a single key
const updateKey = async (req, res)=> {


    const {user_id, keyNumber, trackUrl, mp3Name, bpm, genre } = req.body

    console.log(req.body)

    const { id } = req.params;


    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No Key found"})
    }
    // const workout = await Workouts.find({"user":id});
    // const key = await Keys.findByIdAndUpdate({_id: id}

    const key = await Keys.find({"keyNumber":id},{
        ...req.body
    })

    if(!key){
        return res.status(400).json({error: "No key found y"})
    }

    res.status(200).json(key);

}


module.exports = {
    createNewKey, viewAllKeys, getSingleKey, deleteKey, updateKey
}