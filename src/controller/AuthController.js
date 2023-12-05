import { loginWithUsernameAndPasswordDB } from "../database/authDatabase.js"

export class AuthController {

  /**
   * TODO
   * 1. get username and password inside a body - DONE
   * 2. check with sql table - DONE
   * 3. if got user, generate the token
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
    }

    res.json({
      msg: "Login success"
    })
  }
}