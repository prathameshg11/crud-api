import Post from "../mongodb/models/post.js";

const update = async (req, res) => {
  const { dui, amount} = req.body;
  try {
    const exist = await Post.exists({ dui: dui });
    if (exist === null) {
      const reply = await Post.create({ dui: dui, amount: amount });
      res.status(200).json({ success: true, data: reply});
    } else {
      const reply = await Post.updateOne({ dui: dui }, { amount: amount });
      res.status(200).json({ success: true, data: reply});
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error});
  }
};

const del = async (req, res) => {
  const { dui } = req.body;
    try {
        const reply = await Post.deleteOne({ dui: dui });
        res.status(200).json({ success: true, data: reply});  
    } catch (error) {
        res.status(500).json({ success: false, message: error});
    }
};

const view = async (req, res) => {
  const { dui } = req.body;
    try {
        const reply = await Post.findOne({ dui: dui });
        res.status(200).json({ success: true, data: reply});  
    } catch (error) {
        res.status(500).json({ success: false, message: error});
    }
};

export { update, del, view };
