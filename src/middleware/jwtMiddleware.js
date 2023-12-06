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

import jwt from 'jsonwebtoken'

// ES6 syntax
export const jwtMiddleware = (req, res, next) => {

  // Validate the token
  const auth = req.headers.authorization 

  if(!auth) {
    res.status(400).json({
      error: "Token in Required",
    })

    return;
  }

  const token = auth.split(' ')[1]

  jwt.verify(token, 'my-secret-code', (err, payload) => {
    if(err) {
      res.status(400).json({
        error: "Token in invalid",
        msg: "Please use a valid token"
      })

      return;
    }

    req.authUser = {
      username: payload.username
    }
  })

  /**
   * auth = Bearer new_token
   * ['Bearer', 'new_token']
   */

  next()
}
