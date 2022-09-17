const express = require("express")
const router = express.Router();
const{
    createAnime,
    getAnimes,
    getAnime,
    deleteAnime,
    updateAnime,
} = require("../controllers/animesController");

//get all animes
router.get("/",getAnimes);

//get a single anime
router.get("/:id",getAnime);

//post a new anime
router.post("/",createAnime);

//delete a anime
router.delete("/:id",deleteAnime);

//update a anime
router.patch("/:id",updateAnime);

module.exports = router;