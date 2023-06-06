class AppError extends Error{

	constructor(message, status){
		super()
		this.message = message
		this.status = status

		//note: there is not any default message and status 
		// in the Error class we just sets it here.
	}
}

module.exports = AppError;