const router = require('express').Router()
const { Entry } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    console.log('SESSIONID', req.session.id)
    const entries = await Entry.findAll({
      where: { sessionId: req.session.id }
    })
    res.send(entries)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newEntry = await Entry.create({
      title: req.body.title,
      content: req.body.content,
      description: req.body.description,
      sessionId: req.session.id
    })
    res.status(200).json(newEntry)
  } catch (error) {
    next(error)
  }
})

router.delete('/:entryId', async (req, res, next) => {
  try {
    const entry = await Entry.findById(req.params.entryId)
    await entry.destroy(entry)

    const entryFind = await Entry.findAll()
    res.json(entryFind)
  } catch (error) {
    next(error)
  }
})
