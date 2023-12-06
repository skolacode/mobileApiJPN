export class DriverController {
  getJobs = (req, res) => {
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
    }

    // query.month or query.sevenDays or query.fourtenDays
    

    res.json({ msg: 'Get job success' })
  }
}