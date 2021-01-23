const Likes = require("../../models/likes");
const { Router } = require("express");
const router = Router();

//------- geting all likes ---------------------
router.get('/', async (req, res) =>{
    try{
        const allLikes = await Likes.find();
        if(!allLikes) throw new Error('likes getiing porcess Err !');
        res.status(200).json(allLikes);
    } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//------ geting specific likes for a post -------
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const alllikesforpost = await Likes.find({post_Id : id});
        if(!alllikesforpost) throw new Error('getting likes for specific post process Err!');
        res.status(200).json(alllikesforpost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//------ geting specific likes for a user -------
router.get('/mylike/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const alllikesforUser = await Likes.find({userowner_Id : id});
        if(!alllikesforUser) throw new Error('getting likes for specific post process Err!');
        res.status(200).json(alllikesforUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//-------- making a like for a post -----------
router.post('/', async (req, res) =>{
    const newLike= new Likes(req.body);
    try {
        const addLike= await newLike.save();
        if(!addLike) throw new Error('liking process Err !');
        res.status(200).send(addLike);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//-------- delete a like -----------------
router.delete('/:id', async (req, res) =>{
    const { id } = req.params;
    try {
        const unliked = await Likes.findByIdAndDelete(id);
        if(!unliked) throw new Error('like deletion not done !');
        res.status(200).send(true);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;