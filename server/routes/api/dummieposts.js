const { Router } = require("express");
const Dumpost = require("../../models/Dummiepost");

const router = Router();
//---------- get all dummie post ------------------
router.get('/', async (req, res)=>{
    try{
        const allDummPosts = await Dumpost.find();
        if(!allDummPosts) throw new Error('No articles in Db or process Err !');
        const sorted =  allDummPosts.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime()
        });
        res.status(200).json(sorted);
    } catch{
        res.status(500).json({message: err.message})
    }
})

//---------- get a specific dummie post -----------
router.get('/:id', async(req, res) => {
    const { id } = req.params;
    try{
        const onePost = await Dumpost.findById(id);
        if(!onePost) throw new Error('post not found or process Err !');
        res.status(200).json(onePost);
    } catch {
        res.status(500).json({message: err.message})
    }
})
//---------- get my posts -----------
router.get('/mypost/:id', async(req, res) => {
    const { id } = req.params;
    try{
        const myposts = await Dumpost.find({user_id:id});
        if(!myposts) throw new Error('post not found or process Err !');
        const sorted =  myposts.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime()
        });
        res.status(200).json(sorted);
    } catch {
        res.status(500).json({message: err.message})
    }
})
//---------- create a dummie post -----------------
router.post('/', async (req, res) =>{
    const newDumPost =  new Dumpost(req.body);
    try{
        const newposttest = await newDumPost.save();
        if(!newposttest) throw new Error('post creation opperation failed !');
        res.status(200).json(newposttest);
    } catch {
        res.status(500).json({message: err.message})
    }
})


//------------ export module --------------------
module.exports = router;
