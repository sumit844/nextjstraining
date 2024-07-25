import userModel from "@/model/users";
import connectMongoDB from "@/middlewares/connectMongoDB";

const handler = async (req, res) => {
    try {
        var data = await userModel.find({});
        console.log()
        res.status(200).json(data)
    } catch (err) {

        res.status(400).json({ error: err.message })
    }
}

export default connectMongoDB(handler);