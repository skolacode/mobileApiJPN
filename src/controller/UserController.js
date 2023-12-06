import { endOfMonth, format } from "date-fns"
import { getAllApplicationsByDriverIDDB, getApplicationByDepartureOrArrivalDateDB } from "../database/userDatabase.js"

export class UserController {
  getApplications = (req, res) => {
    const query = req.query

    const queryKey = Object.keys(query)[0]

    const queryValue = query[queryKey]

    if(queryKey === 'month') {

      const monthValue = parseInt(queryValue) || 0

      const isNonValidMonth = monthValue < 1 || monthValue > 12

      if(isNonValidMonth) {
        res.status(400).json({
          error: "Sila masukkan value yang betul",
          msg: "value yang sah adalah 1 hingga 12"
        })

        return
      }

      getAllApplicationsByDriverIDDB(monthValue)
    }

    res.json({ msg: 'Get job success' })
  }

  getApplicationByDepartureAndArrivalDate = (req,res) => {

    const query = req.query
    const date = parseInt(query.date) || 0
    const month = (parseInt(query.month) - 1) || -1
    const year = parseInt(query.year) || 0

    const isNonValidMonth = month < 0 || month > 11

    if(isNonValidMonth) {
      res.status(400).json({
        error: "Sila masukkan value yang betul",
        msg: "value yang sah adalah 1 hingga 12"
      })

      return
    }

    const currentYear = new Date().getFullYear()
    const isNonValidYear = year < 2010 || year > currentYear

    if(isNonValidYear) {
      res.status(400).json({
        error: "Sila masukkan value yang betul",
        msg: `value yang sah adalah 2010 hingga ${currentYear}`
      })

      return
    }

    const dateMaxFull = endOfMonth(new Date(year, month, 1))
    const maxDateOnly = dateMaxFull.getDate()
    const isNonValidDate = date < 1 || date > maxDateOnly

    if(isNonValidDate) {
      res.status(400).json({
        error: "Sila masukkan value yang betul",
        msg: `value yang sah adalah 1 hingga ${maxDateOnly}`
      })

      return
    }

    const formatedDate = format(new Date(year, month, date), 'yyyy-MM-dd')

    getApplicationByDepartureOrArrivalDateDB(formatedDate)

    res.json({
      msg: 'Job is fetched'
    })
  }
}
