var express			= require( 'express' ),
	router			= express.Router(),
	body_parser		= require( 'body-parser' ),
	todosController = require( '../controller/todos' )

router.route( '/' )
	.get( todosController.index )
	.post( todosController.createTodo )

router.route( '/:id' )
	.get( todosController.getTodo )
	.patch( todosController.updateTodo )
	.delete( todosController.deleteTodo )

module.exports = router

