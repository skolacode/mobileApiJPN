export class UserController {

  getUsers = (req, res) => {

    console.log('mobileApiUser: ', req.mobileApiUser)

    res.send("Hello JPN")
  }

  postUser = (req, res) => {

    const body = req.body
    console.log('body >> ', body)

    res.send({
      msg: "Hi testing"
    })
  }

  putUser = (req, res) => {
    res.send({
      msg: "Hi Put Success"
    })
  }

  patchUser = (req, res) => {
    res.send({
      msg: "Hi Patch Success"
    })
  }
}