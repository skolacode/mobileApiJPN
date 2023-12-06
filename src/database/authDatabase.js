import { connection } from '../../index.js'

const DUMMY_RECORDS = [
  {
    username: 'hafiz',
    password: 'test123',
  },
  {
    username: 'sue',
    password: 'test124',
  },
  {
    username: 'sha',
    password: 'test125',
  }
]

export const loginWithUsernameAndPasswordDB = (username, password) => {
  // TODO > SQL logic

  console.log('username: ', username)
  console.log('password: ', password)
  
  const SQL_QUERY = `SELECT * FROM auth where name = 'Hanifs'`

  connection.query(SQL_QUERY, (err, rows, fields) => {
    if (err) throw err

    console.log('rows[0]: ', )

    const result = JSON.parse(JSON.stringify(rows))

    console.log('The solution is: ', result[0])
  })

  const FIND_USER_RESULT = DUMMY_RECORDS.find(
    (user) => user.password === password && user.username === username
  )

  return FIND_USER_RESULT
}

// ASYNC and SYNC