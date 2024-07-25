import connectMongoDB from "@/middlewares/connectMongoDB";
import userModel from "@/model/users";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        try {
            var email = req.body.Email;
            var password = req.body.Password;
            var data = await userModel.findOne({ Email: email })
            if (data !== null) {
                if (data.Password == password) {
                    res.status(200).json(data);
                } else {
                    res.status(400).json("Password is not correct");
                }
            } else {
                res.status(200).json("Email is not correct");
            }
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    } else {
        res.status(400).json("Method is wrong")
    }
}

export default connectMongoDB(handler)