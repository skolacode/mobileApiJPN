/**
 * TODO:
 * 1. this function is to decode the JWT token
 * 2. It will append the user payload into the request
 * 
 * FOR NOW, testing
 * ---
 * a. Just run some console log
 * b. inject a attribute into request (req)
 */

// ES6 syntax
export const jwtMiddleware = (req, res, next) => {
  console.log('run before')
  console.log('req.mobileApiUser before>> ', req.mobileApiUser)
  req.mobileApiUser = "tech guy"
  next()
  console.log('run after')
}
