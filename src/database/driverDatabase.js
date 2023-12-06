import { endOfMonth, format, startOfMonth } from "date-fns"

export const getAllJobsByDriverIDDB = (month) => {

  const date = new Date()
  const getMonth = month-1 // bcus in coding number start with 0
  const currentFirstDateOfTheMonth = new Date(date.getFullYear(), getMonth)

  const firstDayOfTheMonth = startOfMonth(currentFirstDateOfTheMonth)
  console.log('firstDayOfTheMonth: ', firstDayOfTheMonth)

  const lastDayOfTheMonth = endOfMonth(currentFirstDateOfTheMonth)

  const firstDayOfTheMonthDateOnly = format(firstDayOfTheMonth, 'yyyy-MM-dd')
  const lastDayOfTheMonthDateOnly = format(lastDayOfTheMonth, 'yyyy-MM-dd')

  console.log('firstDayOfTheMonthDateOnly: ', firstDayOfTheMonthDateOnly)
  console.log('lastDayOfTheMonthDateOnly: ', lastDayOfTheMonthDateOnly)

  const SQL = `...query goes here`

  const results = 'some results'

  return results
}