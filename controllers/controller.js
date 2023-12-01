const feed = require("../model/feedModel.js")

// get homepage

const getHomepage = (req, res) =>  {
    feed.find()
     .sort({create_at : -1})
     .then((result) => res.render('index', {feeds : result }))
     .catch(err => console.log(err))

}


const addFeed = (req, res) =>  {
    const newFeed = new feed(req.body)
    newFeed.save()
    .then(() => res.redirect('/'))
    .catch((err) => res.render('notfound'))

}

const getOneFeed = (req, res) =>  {
    feed.findById(req.params.id)
    .then(result => res.render('fullFeed',{feeds : result}))
    .catch(err => console.log(err))
}

const getEditFeed = (req, res) => {
    feed.findById(req.params.id)
    .then(result => res.render('editFeed',{feeds : result}))
    .catch(err => console.log(err))
}

const updateFeed = (req, res) => {
    feed.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(result => {
            if (result) {
                res.redirect(`/fullFeed/${result._id}`);
            } else {
               
                res.render('notfound');
            }
        })
        .catch(err => console.log(err));
}

const deleteFeed = (req, res) => {
    feed.findByIdAndDelete({ _id: req.params.id })
      .then(() => res.redirect("/"))
      .catch((err) => console.log(err));
  };
  

module.exports = {
    getHomepage,
    addFeed,
    getOneFeed,
    getEditFeed,
    updateFeed,
    deleteFeed
}