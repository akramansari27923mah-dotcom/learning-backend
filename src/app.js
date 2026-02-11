const express = require('express');

const app = express()
app.use(express.json())

const notes = []

// send data to server
app.post('/notes', (req, res) => {
    notes.push(req.body)

    res.status(200).json({
        message : 'notes created successfully'
    })
})

// grab data to server
app.get('/notes', (req, res) => {

    res.status(200).json({
        message : 'notes fatched successfully',
        notes : notes
    })

})

// delete data to server
app.delete('/notes/:index', (req, res) => {
        const index = req.params.index
        
        delete notes[index]

        res.status(200).json({
            message : 'note deleted successfully'
        })
})


// update data to server
app.patch('/notes/:index', (req, res) => {
    const index = req.params.index
    const {discription, title} = req.body

    notes[index].discription = discription
    notes[index].title = title

    res.status(200).json({
        message : 'note updated successfully'
    })
})


module.exports = app