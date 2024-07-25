import userModel from "@/model/users";
import connectMongoDB from "@/middlewares/connectMongoDB";

// register API should be post API because we can not get sensitive data using Query String
const handler = async (req, res) => {

    try {
        console.log(req.body)
        if (req.method == 'POST') {
            var userId = parseInt(Math.random() * 1000000000).toString()
            var Name = req.body.Name;
            var Email = req.body.Email;
            var Password = req.body.Password;
            var MobileNumber = req.body.MobileNumber;
            var userModels = new userModel({
                userId: userId,
                Name: Name,
                Email: Email,
                Password: Password,
                MobileNumber: MobileNumber
            })
            var data = await userModels.save()
            res.status(200).json(data)
        } else {
            res.status(400).json("Method is wrong")
        }
    } catch (err) {
        res.status(400).json({ error: err.message })
    }

}

export default connectMongoDB(handler)