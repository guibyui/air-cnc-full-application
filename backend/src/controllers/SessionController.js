// Index, Show,Store, Update, Destroy

const User = require('../models/User')

module.exports = {
    async store(req, res) {
        // return res.json({ message: 'Hello World!'} )

        const { email } = req.body;
        
        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });
        }

        // const user = await User.create({ email });

        return res.json(user);
    }
};