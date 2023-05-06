const express = require("express");
const router = express.Router();
const recipes = require("../controller/recipiesController");

router.get("/", recipes.getRecipe);
router.post("/", recipes.postRecipe);
router.delete("/:id", recipes.deleteRecipe);


module.exports = router;
