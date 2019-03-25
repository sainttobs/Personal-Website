let express = require('express');
let exphbs = require('express-handlebars');
let logger = require('morgan');

let indexRouter = require('./routes/index');

let path = require('path');

let app = express();
app.use(logger('dev'));

app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');


app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
	res.locals.login = req.isAuthenticated();
	res.locals.session = req.session;
	next();
})

app.use('/', indexRouter);



// Setup server port
var port = process.env.PORT || 4000;


// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Personal Website is Running on " + port);
});