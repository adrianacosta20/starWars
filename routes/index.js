const moviesJson=require('../movies.json')

exports.home = function (req, res) {
    let movies = moviesJson.movies;
    res.render('home', {
        title: "Star Wars Movies",
        movies: movies
        
    });
};
exports.movies_single = function (req, res) {
    var episodeNumber = req.params.episodeNumber;
    res.send("This is the page for episode" + episodeNumber);
};
exports.notFound = function (req, res) {
    res.send("This is not the page you are looking for")
};