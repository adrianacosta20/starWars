const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const routes =require('./routes');
const path=require('path');
app.use(express.static(path.join(__dirname, 'public')))
//home
app.get('/', routes.home);

//movie single
app.get('/starWarsEpisode/:episodeNumber?',routes.movies_single);

//not found
app.get('*', routes.notFound);

app.listen(3000, function(){
  console.log("The application is runing on localhost:3000");
})
