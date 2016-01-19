var express 	= require( 'express' ),
	path		= require( 'path' ),
	app			= express(),
	logger		= require( 'morgan' ),
	body_parser = require( 'body-parser' ),
	mongoose	= require( 'mongoose' ),
	port 		= process.env.PORT || 3000

app.use( logger( "dev" ) )
app.use( body_parser.json() )
app.use( body_parser.urlencoded( { extended: false } ) )

app.get( '/', function( req, res ) {
	res.send( "Hello!" )
})

app.listen( port )
console.log( "Server on", port )