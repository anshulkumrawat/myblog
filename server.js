//server.js

const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose');

   config = require('./DB');
   const blogRoute = require('./routes/blog.route');
   const userRoute = require('./routes/UserRoute');

    //mongoose.set('useNewUrlParser', true);
    //mongoose.set('useUnifiedTopolgy', true);
    //mongoose.set('useFindAndModify', false);
    //mongoose.set('useCreateIndex', true);

    const PORT = process.env.PORT || 8080;

    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true}).then(
        () => { console.log('Database is connected') },
        err => { console.log('Can not connect to the database' + err)}
    );

    const app = express();

    app.use(express.static(__dirname + '/dist'));

    //PathLocationStrategy
    app.get('/*', function(req, res) {
      res.sendFile(path.join(__dirname + '/dist/index.html'));
    })

    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    let corsOptions = {
      origin: 'http://localhost:4200',
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }

    app.use(cors(corsOptions)); //corsOptions
    app.use('/blog', blogRoute);
    app.use('/api/users', userRoute);

    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
