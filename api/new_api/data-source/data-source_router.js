const express = require("express"),
    router = express.Router(),
    bodyparser = require("body-parser"),
    path = require("path"),
    DataSource_source = require('./data-source_source')
const {ensureLink} = require("fs-extra");
    cors = require("cors");
router.use(cors({ origin: '*' }))

router.post('/create', async (req, res) => {
    let data = req.body;
    await DataSource_source.createDataSource(data, function (result) {
        if (result === true)
            res.status(200).send(true)
        else
            res.status(501).send(false)
    })
});

router.post('/delete', async (req, res) => {
    let data = req.body;
    await DataSource_source.deleteDataSource(data, function (result) {
        if (result === true)
            res.status(200).send(true)
        else
            res.status(501).send(false)
    })
});
module.exports = router