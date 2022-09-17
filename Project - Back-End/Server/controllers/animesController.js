const Anime = require("../models/anime");
const mongoose= require("mongoose");


//get all students
const getAnimes= async(req, res) => {
    const animes = await Anime.find({}).sort({createdAt: -1});
    res.status(200).json(animes);
};

//get a single student
const getAnime = async(req,res)=>{
    const {id} = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such Anime"});
    }
    
    const anime = await Anime.findById(id);

    if(!anime){
        return res.status(404).json({error: "No Such Anime"});
    }

    res.status(200).json(anime);
}

//create a new student
const createAnime = async (req, res) => {
    const { name, summary, type, picture, genre}= 
    req.body;
    try{
        const anime= await Anime.create({
            name,
            summary,
            type,
            picture,
            genre
        });
        res.status(200).json("Record Successfully Added...");
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
    };

//delete a student
const deleteAnime = async(req,res)=>{
    const {id} = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such Anime"});
    }
    
    const anime = await Anime.findOneAndDelete({_id: id});

    if(!anime){
        return res.status(404).json({error: "No Such Anime"});
    }

    res.status(200).json("Record Successfully Deleted...");
}

//update a student
const updateAnime = async(req,res)=>{
    const {id} = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such Anime"});
    }
    
    const anime = await Anime.findOneAndUpdate(
        {_id: id},
        {
            ...req.body,
        }
    );

    if(!anime){
        return res.status(404).json({error: "No Such Anime"});
    }

    res.status(200).json("Record Successfully Updated...");
}

module.exports = {
    createAnime,
    getAnimes,
    getAnime,
    deleteAnime,
    updateAnime
}