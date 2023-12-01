const express = require('express')
const route = express.Router()
const postController = require('../controllers/controller')

route.get('/feed', postController.getHomepage)
route.post('/addfeed', postController.addFeed)
route.get('/fullFeed/:id', postController.getOneFeed)
route.get('/editFeed/:id', postController.getEditFeed)
route.post('/updateFeed/:id', postController.updateFeed)
route.get('/deleteFeed/:id', postController.deleteFeed);

route.get("/", (req, res) => {
    res.redirect("/feed");
  });



module.exports = route