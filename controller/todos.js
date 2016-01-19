var Todo = require( '../models/todo' )

function index( req, res ) {
	Todo.find( function( error, todos ) {
		if ( error ) res.json( { message: "Could not find todos" } )
		res.json( todos )
	})
}

function createTodo( req, res ) {

	var todo = new Todo()
		todo.title = req.body.title
		todo.content = req.body.content
	
	todo.save( function( error ) {
		if ( error ) res.json( { message: "Todo could not be created!" } )
		res.redirect( '/' )
	})
}

function getTodo( req, res ) {

	var banana = req.params.id

	Todo.findById( { _id: id }, function( error, todo ) {
		if ( error ) res.json( { message: "Could not find Todo" } )
		res.json( { todo: todo } )
	} )
}

function updateTodo( req, res ) {

	var id = req.params.id

	Todo.findById( { _id: id }, function( error, todo ) {
		if ( error ) res.json( { message: "Could not find Todo" } )

		if ( req.body.title ) Todo.title = req.body.title
		if ( req.body.content ) Todo.content = req.body.content

		Todo.save( function ( error ) {
			if ( error ) res.json( { message: "Todo could not be updated!" } )
			res.json( { message: "Todo created!" } )
		})	
}

function deleteTodo( req, res ) {

	var id = req.params.id

	Todo.remove( { _id: id }, function( error ) {
		if ( error ) res.json( { message: "Could not delete Todo!" } )
		res.json( { message: "Todo deleted!" } )
	} )
}

module.exports = {
	index: index,
	createTodo: createTodo,
	getTodo: getTodo,
	updateTodo: updateTodo,
	deleteTodo: deleteTodo
}
		







