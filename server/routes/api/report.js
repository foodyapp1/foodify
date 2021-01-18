const Report = require("../../models/report");
const { Router } = require("express");
const router = Router();

//-------post a report -----------------
router.post('/', async (req, res)=>{
    const newReport = new Report(req.body)
    try{
        const addReport = newReport.save();
        if(!addReport) throw new Error("saving Report process Err !");
        res.status(200).send(true);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//-------------------------------------

//------------exporting----------------

module.exports = router;