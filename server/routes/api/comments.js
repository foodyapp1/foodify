const Comments = require("../../models/comments");
const { Router } = require("express");
const router = Router();

router.post('/',async (req,res)=>{
    const newcomment= new Comments(req.body)
try{
    const addedComment= await newcomment.save();
    if(!addedComment) throw new Error('saving comment failed');
  res.status(200).json(addedComment);
} catch (error) {
    res.status(500).json({ message: error.message });
  }
})

//////////////// getting specefic commentary for a post depending on id 

router.get('/:id',async (req,res)=>{
    const {id}= req.params;
    try{
        const postComment= await Comments.find({post_Id:id});
        if(!postComment) throw new Error('process for new comment failed');
        const mysortedcomment =  postComment.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime()
        })
        res.status(200).json(mysortedcomment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})








module.exports = router;