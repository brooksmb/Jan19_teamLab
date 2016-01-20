var express 	= require( 'express' ),
	path		= require( 'path' ),
	app			= express(),
	logger		= require( 'morgan' ),
	body_parser = require( 'body-parser' ),
	mongoose	= require( 'mongoose' ),
	port 		= process.env.PORT || 3000,
	routes		= require( './routes/routes' ),
	mongoUri =  process.env.MONGOLAB_URI || 'mongodb://localhost/todo_lab';


mongoose.connect(mongoUri);


app.use( logger( "dev" ) )
app.use( body_parser.json() )
app.use( body_parser.urlencoded( { extended: false } ) )


app.set( "views", path.join( __dirname, "views" ) )
app.engine( "ejs", require( "ejs" ).renderFile )
app.set( "view engine", "ejs" )

app.use( '/todos', routes )


app.listen(process.env.PORT || 3000 )
console.log( "Server on", port )
