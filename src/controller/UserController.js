export class UserController {

  getUsers = (req, res) => {

    const params = req.params
    const paramName = params.name

    console.log('params: ', params)
    console.log('paramName: ', paramName)

    const query = req.query
    console.log('query: ', query)
    const queryAge = query.age

    console.log('this is queryAge value >> ', queryAge)

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