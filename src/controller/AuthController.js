import { loginWithUsernameAndPasswordDB } from "../database/authDatabase.js"
import jwt from 'jsonwebtoken'

export class AuthController {

  /**
   * TODO
   * 1. get username and password inside a body - DONE
   * 2. check with sql table - DONE
   * 3. if got user, generate the token - WIP
   * 4. else, return error message
   *
   */
  login = (req, res) => {
    const body = req.body
    const username = body.username
    const password = body.password

    console.log('body: ', body)
    const result = loginWithUsernameAndPasswordDB(username, password)

    if(result === undefined) {
      res.status(400).json({ 
        msg: 'Username and password mismatch'
      })

      return
    }

    // Generate token and send to front end
    const payload = {
      username: username,
    }

    const token = jwt.sign(payload, 'my-secret-code', {
      expiresIn: '90d'
    });

    res.json({
      msg: "Login success",
      token: token
    })
  }
}