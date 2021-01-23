const Report = require("../../models/report");
const { Router } = require("express");
const router = Router();

//-------get specific reports ------------
router.get('/', async (req, res) =>{
    try{
        const allRepoerts = await Report.find();
        if(!allRepoerts) throw new Error('reports fetch process unique Err!');
        res.status(200).json(allRepoerts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//-------get specific reports ------------
router.get('/:id', async (req, res) =>{
    const { id } = req.params;
    try{
        const relatedReport = await Report.find({ post_Id: id });
        if(!relatedReport) throw new Error('reports fetch process unique Err!');
        res.status(200).json(relatedReport);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//-------post a report -------------------
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

//-------delete a report -------------------
router.delete('/:id', async (req, res)=>{
    const { id } = req.params;
    try{
        const deletedReport = await Report.findByIdAndDelete(id);
        if(!deletedReport) throw new Error('report deletion donne Err');
        res.status(200).send(true);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
//----------- router export --------------
module.exports = router;