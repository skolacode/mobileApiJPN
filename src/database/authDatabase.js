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
  
  const SQL_QUERY = `SELECT * FROM table_name where username = ${username} AND password = ${password}`

  const FIND_USER_RESULT = DUMMY_RECORDS.find(
    (user) => user.password === password && user.username === username
  )

  return FIND_USER_RESULT
}

// ASYNC and SYNC