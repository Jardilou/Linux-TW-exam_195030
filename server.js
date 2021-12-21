let express = require('express');


let app = express();

let router = require('./routes');


app.use('/', router);

app.use(express.urlencoded({extended:true}));


app.listen(2000, function(){
    console.log('Running on port 2000')
});

